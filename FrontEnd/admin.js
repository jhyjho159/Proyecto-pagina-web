const apiUrl = 'http://localhost:3000/api/books';
const bookList = document.getElementById('book-list');
const form = document.getElementById('book-form');

const inputs = {
  Titulo: document.getElementById('Titulo'),
  Autor: document.getElementById('Autor'),
  Genero: document.getElementById('Genero'),
  tipo_libro: document.getElementById('tipo_libro'),
  n_paginas: document.getElementById('n_paginas'),
  idioma: document.getElementById('idioma'),
  editorial: document.getElementById('editorial'),
  precio_venta: document.getElementById('precio_venta'),
  descripcion: document.getElementById('descripcion')
};

let editId = null;

async function fetchBooks() {
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);
    const books = await res.json();
    bookList.innerHTML = '';

    books.forEach(book => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${book.Titulo || 'Sin título'}</strong> de ${book.Autor || 'Desconocido'}<br>
        Género: ${book.Genero || '-'}, Páginas: ${book.n_paginas || '-'}, Idioma: ${book.idioma || '-'}<br>
        Editorial: ${book.editorial || '-'}, Precio: $${book.precio_venta || '0.00'}<br>
        Descripción: ${book.descripcion || ''}
      `;

      const editBtn = document.createElement('button');
      editBtn.textContent = 'Editar';
      editBtn.onclick = () => loadBookForEdit(book);

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Eliminar';
      deleteBtn.onclick = () => deleteBookHandler(book.idLIBRO);

      li.appendChild(editBtn);
      li.appendChild(deleteBtn);
      bookList.appendChild(li);
    });
  } catch (error) {
    console.error('Error al obtener libros:', error);
    bookList.innerHTML = `<li class="error">Error al cargar los libros: ${error.message}</li>`;
  }
}

function loadBookForEdit(book) {
  editId = book.idLIBRO;
  Object.entries(inputs).forEach(([key, input]) => {
    input.value = book[key] || '';
  });
  form.scrollIntoView({ behavior: 'smooth' });
}

async function deleteBookHandler(id) {
  if (confirm('¿Eliminar este libro?')) {
    try {
      const res = await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Error al eliminar');
      fetchBooks();
    } catch (error) {
      console.error('Error al eliminar libro:', error);
      alert('No se pudo eliminar el libro');
    }
  }
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const newBook = {};
  let isValid = true;
  
  Object.entries(inputs).forEach(([key, input]) => {
    newBook[key] = input.value.trim();
    if (input.required && !newBook[key]) {
      input.style.borderColor = 'red';
      isValid = false;
    } else {
      input.style.borderColor = '';
    }
  });

  if (!isValid) {
    alert('Por favor complete todos los campos requeridos');
    return;
  }

  try {
    const method = editId ? 'PUT' : 'POST';
    const url = editId ? `${apiUrl}/${editId}` : apiUrl;

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBook)
    });

    if (!res.ok) {
      const error = await res.text();
      throw new Error(error);
    }

    form.reset();
    editId = null;
    fetchBooks();
  } catch (error) {
    console.error('Error al guardar el libro:', error);
    alert('Error al guardar: ' + error.message);
  }
});

// Inicializar
fetchBooks();