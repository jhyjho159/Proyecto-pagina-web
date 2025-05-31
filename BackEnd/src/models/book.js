const pool = require('../database');

async function getAllBooks() {
  try {
    const [rows] = await pool.query('SELECT * FROM libro');
    return rows;
  } catch (error) {
    console.error('Error en getAllBooks:', error);
    throw new Error('Error al obtener los libros');
  }
}

async function getBookByIdDB(id) {
  try {
    const [rows] = await pool.query('SELECT * FROM libro WHERE idLIBRO = ?', [id]);
    if (rows.length === 0) throw new Error('Libro no encontrado');
    return rows[0];
  } catch (error) {
    console.error('Error en getBookByIdDB:', error);
    throw error;
  }
}

async function createBookDB(book) {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();
    
    const { Titulo, Autor, Genero, tipo_libro, n_paginas, idioma, editorial, precio_venta, descripcion } = book;
    
    if (!Titulo || !Autor) throw new Error('Título y Autor son campos requeridos');

    const [result] = await connection.query(
      `INSERT INTO libro (Titulo, Autor, Genero, tipo_libro, n_paginas, idioma, editorial, precio_venta, descripcion) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [Titulo, Autor, Genero, tipo_libro, n_paginas, idioma, editorial, precio_venta, descripcion]
    );
    
    await connection.commit();
    return { idLIBRO: result.insertId, ...book };
  } catch (error) {
    await connection.rollback();
    console.error('Error en createBookDB:', error);
    throw error;
  } finally {
    connection.release();
  }
}

async function updateBookDB(id, book) {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();
    
    const { Titulo, Autor, Genero, tipo_libro, n_paginas, idioma, editorial, precio_venta, descripcion } = book;
    
    const [existing] = await connection.query('SELECT 1 FROM libro WHERE idLIBRO = ?', [id]);
    if (existing.length === 0) throw new Error('Libro no encontrado');

    await connection.query(
      `UPDATE libro SET 
       Titulo = ?, Autor = ?, Genero = ?, tipo_libro = ?, n_paginas = ?, 
       idioma = ?, editorial = ?, precio_venta = ?, descripcion = ?
       WHERE idLIBRO = ?`,
      [Titulo, Autor, Genero, tipo_libro, n_paginas, idioma, editorial, precio_venta, descripcion, id]
    );
    
    await connection.commit();
    return { idLIBRO: id, ...book };
  } catch (error) {
    await connection.rollback();
    console.error('Error en updateBookDB:', error);
    throw error;
  } finally {
    connection.release();
  }
}

async function deleteBookDB(id) {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();
    
    const [existing] = await connection.query('SELECT 1 FROM libro WHERE idLIBRO = ?', [id]);
    if (existing.length === 0) throw new Error('Libro no encontrado');

    await connection.query('DELETE FROM libro WHERE idLIBRO = ?', [id]);
    
    await connection.commit();
    return { message: 'Libro eliminado correctamente' };
  } catch (error) {
    await connection.rollback();
    console.error('Error en deleteBookDB:', error);
    throw error;
  } finally {
    connection.release();
  }
}

module.exports = {
  getAllBooks,
  getBookByIdDB,
  createBookDB,
  updateBookDB,
  deleteBookDB
};