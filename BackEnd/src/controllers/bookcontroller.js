const {
  getAllBooks,
  getBookByIdDB,
  createBookDB,
  updateBookDB,
  deleteBookDB
} = require('../models/book');

const getBooks = async (req, res) => {
  try {
    const books = await getAllBooks();
    res.json(books);
  } catch (error) {
    console.error('Error en getBooks:', error);
    res.status(500).json({ error: 'Error al obtener los libros' });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await getBookByIdDB(req.params.id);
    res.json(book);
  } catch (error) {
    console.error('Error en getBookById:', error);
    if (error.message === 'Libro no encontrado') {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Error al obtener el libro' });
    }
  }
};

const createBook = async (req, res) => {
  try {
    if (!req.body.Titulo || !req.body.Autor) {
      return res.status(400).json({ error: 'Título y Autor son campos requeridos' });
    }
    const newBook = await createBookDB(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    console.error('Error en createBook:', error);
    res.status(500).json({ error: 'Error al crear el libro', details: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const updatedBook = await updateBookDB(req.params.id, req.body);
    res.json(updatedBook);
  } catch (error) {
    console.error('Error en updateBook:', error);
    if (error.message === 'Libro no encontrado') {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Error al actualizar el libro', details: error.message });
    }
  }
};

const deleteBook = async (req, res) => {
  try {
    const response = await deleteBookDB(req.params.id);
    res.json(response);
  } catch (error) {
    console.error('Error en deleteBook:', error);
    if (error.message === 'Libro no encontrado') {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Error al eliminar el libro', details: error.message });
    }
  }
};

module.exports = {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
};