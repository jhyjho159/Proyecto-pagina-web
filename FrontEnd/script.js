document.querySelectorAll('.tag-toggle input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      this.closest('.tag-toggle').classList.toggle('checked', this.checked);
    });
  });

  // Código para manejar el modal de inicio de sesión
document.addEventListener('DOMContentLoaded', function() {
        // Obtener elementos del DOM
        const botonAbrirLogin = document.getElementById('abrir-login');
        const modalLogin = document.getElementById('modal-login');
        const modalRegistro = document.getElementById('modal-registro');
        const botonCerrarLogin = document.getElementById('cerrar-login');
        const botonCerrarRegistro = document.getElementById('cerrar-registro');
        const enlaceRegistro = document.querySelector('.enlace-registro');
        const enlaceLogin = document.querySelector('.enlace-login');
        
        // Función para abrir el modal de login
        function abrirModalLogin() {
            modalLogin.style.display = 'flex';
            modalRegistro.style.display = 'none';
        }
        
        // Función para abrir el modal de registro
        function abrirModalRegistro() {
            modalRegistro.style.display = 'flex';
            modalLogin.style.display = 'none';
        }
        
        // Función para cerrar todos los modales
        function cerrarModales() {
            modalLogin.style.display = 'none';
            modalRegistro.style.display = 'none';
        }
        
        // Event listeners
        if (botonAbrirLogin) {
            botonAbrirLogin.addEventListener('click', abrirModalLogin);
        }
        
        if (botonCerrarLogin) {
            botonCerrarLogin.addEventListener('click', cerrarModales);
        }
        
        if (botonCerrarRegistro) {
            botonCerrarRegistro.addEventListener('click', cerrarModales);
        }
        
        if (enlaceRegistro) {
            enlaceRegistro.addEventListener('click', abrirModalRegistro);
        }
        
        if (enlaceLogin) {
            enlaceLogin.addEventListener('click', abrirModalLogin);
        }
        
        // Cerrar los modales si se hace clic fuera del contenido
        window.addEventListener('click', function(event) {
            if (event.target === modalLogin || event.target === modalRegistro) {
                cerrarModales();
            }
        });
        
        // Evitar que el formulario de login recargue la página al enviar
        const formularioLogin = document.getElementById('form-login');
        if (formularioLogin) {
            formularioLogin.addEventListener('submit', function(event) {
                event.preventDefault();
                // Aquí puedes agregar la lógica para procesar el inicio de sesión
                console.log('Iniciando sesión con:', {
                    email: document.getElementById('email').value,
                    password: document.getElementById('password').value
                });
                // Simular un inicio de sesión exitoso
                alert('Inicio de sesión exitoso');
                cerrarModales();
            });
        }
        
        // Evitar que el formulario de registro recargue la página al enviar
        const formularioRegistro = document.getElementById('form-registro');
        if (formularioRegistro) {
            formularioRegistro.addEventListener('submit', function(event) {
                event.preventDefault();
                
                // Validar que las contraseñas coincidan
                const password = document.getElementById('password-registro').value;
                const confirmarPassword = document.getElementById('confirmar-password').value;
                
                if (password !== confirmarPassword) {
                    alert('Las contraseñas no coinciden');
                    return;
                }
                
                // Aquí puedes agregar la lógica para procesar el registro
                console.log('Registrando usuario con:', {
                    nombre: document.getElementById('nombre').value,
                    email: document.getElementById('email-registro').value,
                    password: password
                });
                
                // Simular un registro exitoso
                alert('Registro exitoso');
                cerrarModales();
            });
        }
        
        // Event listener para el enlace de recuperar contraseña
        const recuperarPassword = document.querySelector('.recuperar-password');
        if (recuperarPassword) {
            recuperarPassword.addEventListener('click', function() {
                alert('Redirigiendo a recuperación de contraseña...');
                // Aquí puedes redirigir a la página de recuperación de contraseña
            });
        }
        
        // Event listeners para los botones sociales
        const botonesSociales = document.querySelectorAll('.boton-social');
        botonesSociales.forEach(function(boton, index) {
            boton.addEventListener('click', function() {
                if (modalLogin.style.display === 'flex') {
                    alert('Iniciando sesión con Google...');
                } else {
                    alert('Registrándose con Google...');
                }
                // Aquí puedes implementar la autenticación con Google
            });
        });
    });

    

const libros = [
  {
     id: 1,
    titulo: "Harry Potter y la piedra filosofal 1",
    autor: "J.K. Rowling",
    precio: "$47.000COP",
    imagen: "img/harrypotter.webp",
    descripcion: "Harry Potter y la piedra filosofal<br />Harry Potter y la piedra filosofal es el primer volumen de la ya clásica serie de novelas fantásticas de la autora británica J.K. Rowling.<br />«Con las manos temblorosas, Harry le dio la vuelta al sobre y vio un sello de lacre púrpura con un escudo de armas: un león, un águila, un tejón y una serpiente, que rodeaban una gran letra H.»<br />Harry Potter nunca ha oído hablar de Hogwarts hasta que empiezan a caer cartas en el felpudo del número 4 de Privet Drive. Llevan la dirección escrita con tinta verde en un sobre de pergamino amarillento con un sello de lacre púrpura, y sus horripilantes tíos se apresuran a confiscarlas. Más tarde, el día que Harry cumple once años, Rubeus Hagrid, un hombre gigantesco cuyos ojos brillan como escarabajos negros, irrumpe con una noticia extraordinaria: Harry Potter es un mago, y le han concedido una plaza en el Colegio Hogwarts de Magia y Hechicería. ¡Está a punto de comenzar una aventura increíble!",
    sku: "123456789",
    editorial: "Editorial XYZ",
    paginas: 320,
    categoria: "Fantasía"
  },
  {
     id: 2,
    titulo: "El Señor Del Fin De Los Tiempos",
    autor: "Reynolds, Josh",
    precio: "$129.000COP",
    imagen: "img/warhammer40kfintiempos.webp",
    descripcion: ``,
    sku: "123456789",
    editorial: "Editorial XYZ",
    paginas: 320,
    categoria: "Fantasía"
  },
  {
     id: 3,
    titulo: "Warhammer 40,000: Caidos",
    autor: "Mann, George",
    precio: "$74.000COP",
    imagen: "img/warhammer40kcaidos.webp",
    descripcion: `Warhammer 40,000: Caidos
Los Ángeles Oscuros han sufrido grandes pérdidas, pero  también han obtenido nueva información sobre la identidad del Caído, la  vieja figura mancillada por el caos que ha orquestado todos sus  movimientos desde que llegaron al Cúmulo de Calaphrax. El escenario está listo para la sangrienta colisión entre los Ángeles Oscuros, que  ocultan los secretos de su pasado; la inquisidora Sabbathiel,  despiadadamente resuelta a exponer sus crímenes a toda costa; los  temibles Caballeros Grises, que no tolerarán ninguna herejía; y las  fuerzas del Caos, que harán llover el fuego sobre justos y pecadores.  ¡Pronto se desatará una feroz batalla!El guionista y colaborador de la  Biblioteca Oscura, George Mann, el dibujante Tazio Bettin y la colorista Enrica Angiolini dan vida a la belleza pesadillesca del oscuro universo de Warhammer 40.000 en el tercer arco argumental de esta aclamada  serie. Recopila los números del 9 al 12 de Warhammer 40.000.
De: Bukz España`,
    sku: "123456789",
    editorial: "Editorial XYZ",
    paginas: 320,
    categoria: "Fantasía"
  },
  {
     id: 4,
    titulo: "El Arte De Juego De Tronos",
    autor: "Jody Revenson",
    precio: "$185.000COP",
    imagen: "img/artesjuegodetronos.webp",
    descripcion: `El Arte De Juego De Tronos
Lleno de maravillosas ilustraciones y dibujos de la serie  de éxito de la HBO, El Arte de Juego de Tronos forma parte de la  colección artística de Juego de Tronos.
Desde la primera temporada, Juego de Tronos ha sido una de las  series televisivas más populares y de mayor éxito. Con una factura  exquisita y un formato de lujo, en estas páginas se presenta una crónica visual de la meticulosa labor realizada por los artistas para llevar el mundo de Poniente a la pantalla.Los aficionados reconocerán los  momentos más emocionantes y las asombrosas localizaciones de la  serie.Este libro contiene multitud de imágenes fascinantes y  magníficamente reproducidas, además de piezas de arte que no se habían  publicado hasta ahora. En este volumen reside el legado visual de Juego  de Tronos, una pieza obligatoria para cualquier gran aficionado a la  serie.

De: Grupo Editorial Planeta`,
    sku: "123456789",
    editorial: "Editorial XYZ",
    paginas: 320,
    categoria: "Fantasía"
  },
  {
     id: 5,
    titulo: "Harry Potter y la Orden del Fénix (Harry Potter 5)",
    autor: " J.K. Rowling",
    precio: "$69.000COP",
    imagen: "img/harry-potter-y-la-orden-del-fenix-5-libro-196.webp",
    descripcion: `Harry Potter y la Orden del Fénix (Harry Potter 5)
Harry Potter y la Orden del Fénix es la quinta entrega de la ya clásica serie de fantasía de la autora británica J.K. Rowling.
Son malos tiempos para Hogwarts. Tras el ataque de los dementores a su primo Dudley, Harry Potter comprende que Voldemort no se detendrá ante nada para encontrarlo. Muchos niegan que el Señor Tenebroso haya regresado, pero Harry no está solo: una orden secreta se reúne en Grimmauld Place para luchar contra las fuerzas oscuras. Harry debe permitir que el profesor Snape le enseñe a protegerse de las brutales incursiones de Voldemort en su mente. Pero éstas son cada vez más potentes, y a Harry se le está agotando el tiempo...
De: Penguin RandomHouse`,
    sku: "9789585234086",
    editorial: "SALAMANDRA BOLSILLO",
    paginas: 928,
    categoria: "Juvenil"
  },
  {
     id: 6,
    titulo: "Los Juegos del Hambre (Saga Los juegos del hambre 1)",
    autor: "Suzanne Collins",
    precio: "$59.000COP",
    imagen: "img/los-juegos-del-hambre-libro-808.webp",
    descripcion: `Los Juegos del Hambre (Saga Los juegos del hambre 1)
El mundo está observando. Ganar significa fama y riqueza. Perder significa una muerte segura.
¡Que empiecen los septuagésimo cuartos juegos del hambre!
En una oscura versión del futuro próximo, doce chicos y doce chicas se ven obligados a participar en un reality show llamado Los Juegos del Hambre. Solo hay una regla: matar o morir.
Cuando Katniss Everdeen, una joven de dieciséis años se presenta voluntaria para ocupar el lugar de su hermana en los juegos, lo entiende como una condena a muerte. Sin embargo, Katniss ya ha visto la muerte de cerca y la supervivencia forma parte de su naturaleza.
De: Penguin RandomHouse`,
    sku: "9786287514188",
    editorial: "Molino",
    paginas: 400,
    categoria: "Juvenil"
  },
  {
    id: 7,
    titulo: "Sinsajo. Los Juegos Del Hambre 3",
    autor: "Suzanne Collins",
    precio: "$64.990COP",
    imagen: "img/sinsajo-los-juegos-del-hambre-3-libro-454.webp",
    descripcion: `Los Juegos del Hambre (Saga Los juegos del hambre 1)
El mundo está observando. Ganar significa fama y riqueza. Perder significa una muerte segura.
¡Que empiecen los septuagésimo cuartos juegos del hambre!
En una oscura versión del futuro próximo, doce chicos y doce chicas se ven obligados a participar en un reality show llamado Los Juegos del Hambre. Solo hay una regla: matar o morir.
Cuando Katniss Everdeen, una joven de dieciséis años se presenta voluntaria para ocupar el lugar de su hermana en los juegos, lo entiende como una condena a muerte. Sin embargo, Katniss ya ha visto la muerte de cerca y la supervivencia forma parte de su naturaleza.
De: Penguin RandomHouse`,
    sku: "9788413144870",
    editorial: " B De Bolsillo España",
    paginas: 424,
    categoria: "Juvenil"
  },
  {
    id: 8,
    titulo: "El Rey Dos Veces Muerto Nº 01 Ruina",
    autor: "Autor: Crowley, Nate",
    precio: "$104.990COP",
    imagen: "img/warhammer40kelreydosvecesmuerto.webp",
    descripcion: `Los Juegos del Hambre (Saga Los juegos del hambre 1)
El mundo está observando. Ganar significa fama y riqueza. Perder significa una muerte segura.
¡Que empiecen los septuagésimo cuartos juegos del hambre!
En una oscura versión del futuro próximo, doce chicos y doce chicas se ven obligados a participar en un reality show llamado Los Juegos del Hambre. Solo hay una regla: matar o morir.
Cuando Katniss Everdeen, una joven de dieciséis años se presenta voluntaria para ocupar el lugar de su hermana en los juegos, lo entiende como una condena a muerte. Sin embargo, Katniss ya ha visto la muerte de cerca y la supervivencia forma parte de su naturaleza.
De: Penguin RandomHouse`,
    sku: "9788413144870",
    editorial: " B De Bolsillo España",
    paginas: 424,
    categoria: "Juvenil"
  }
];
/// Carrito de compras
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para actualizar el contador
function actualizarCarrito() {
    const contador = document.querySelector('.carrito-contador');
    const contadorSidebar = document.getElementById('contador-sidebar');
    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
    
    if (contador) {
        contador.textContent = totalItems;
        contador.style.display = totalItems > 0 ? 'flex' : 'none';
    }
    
    if (contadorSidebar) {
        contadorSidebar.textContent = `(${totalItems})`;
    }
    
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para mostrar el carrito
function mostrarCarrito() {
    const lista = document.getElementById('lista-carrito');
    const totalElement = document.getElementById('total-carrito');
    const carritoVacio = document.getElementById('carrito-vacio');
    
    if (!lista || !totalElement || !carritoVacio) return;
    
    lista.innerHTML = '';
    let total = 0;
    
    if (carrito.length === 0) {
        carritoVacio.style.display = 'block';
        lista.style.display = 'none';
    } else {
        carritoVacio.style.display = 'none';
        lista.style.display = 'block';
        
        carrito.forEach((producto, index) => {
            const subtotal = producto.precio * producto.cantidad;
            total += subtotal;
            
            const item = document.createElement('li');
            item.innerHTML = `
                <div class="item-info">
                    <div class="item-titulo">${producto.nombre || `Libro ID: ${producto.id}`}</div>
                    <div class="item-precio">$${(producto.precio / 1).toLocaleString('es-CO')} COP c/u</div>
                </div>
                <div class="item-controles">
                    <button class="disminuir-item" data-index="${index}">-</button>
                    <span class="item-cantidad">${producto.cantidad}</span>
                    <button class="aumentar-item" data-index="${index}">+</button>
                </div>
                <button class="eliminar-item" data-index="${index}">×</button>
            `;
            lista.appendChild(item);
        });
    }
    
    totalElement.textContent = `Total: $${(total / 1).toLocaleString('es-CO')} COP`;
}

// Función para abrir/cerrar el carrito
function toggleCarrito() {
    const sidebar = document.getElementById('sidebar-carrito');
    const overlay = document.querySelector('.overlay-carrito');
    
    if (!sidebar || !overlay) return;
    
    if (sidebar.classList.contains('abierto')) {
        sidebar.classList.remove('abierto');
        overlay.style.display = 'none';
    } else {
        sidebar.classList.add('abierto');
        overlay.style.display = 'block';
        mostrarCarrito();
    }
}

// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    actualizarCarrito();
    
    // Delegación de eventos
    document.addEventListener('click', function(e) {
        // Añadir al carrito (solo funciona en página de libro)
        if (e.target.closest('.boton-añadir-carrito')) {
            const boton = e.target.closest('.boton-añadir-carrito');
            e.preventDefault();
            
            const producto = {
                id: boton.dataset.id,
                nombre: boton.dataset.nombre,
                precio: parseInt(boton.dataset.precio),
                cantidad: 1
            };
            
            const existente = carrito.find(item => item.id === producto.id);
            if (existente) {
                existente.cantidad++;
            } else {
                carrito.push(producto);
            }
            
            actualizarCarrito();
            mostrarCarrito();
            
            // Feedback visual
            const etiqueta = boton.querySelector('.etiqueta-3');
            if (etiqueta) {
                const originalText = etiqueta.textContent;
                etiqueta.textContent = '✓ Añadido';
                boton.style.backgroundColor = '#f3b711';
                
                setTimeout(() => {
                    etiqueta.textContent = originalText;
                    boton.style.backgroundColor = '';
                }, 2000);
            }
        }
        
        // Abrir/cerrar carrito
        if (e.target.closest('.carrito-container') || 
            e.target.classList.contains('cerrar-sidebar') || 
            e.target.classList.contains('overlay-carrito')) {
            e.preventDefault();
            toggleCarrito();
        }
        
        // Eliminar item
        if (e.target.classList.contains('eliminar-item')) {
            const index = e.target.dataset.index;
            carrito.splice(index, 1);
            actualizarCarrito();
            mostrarCarrito();
        }
        
        // Aumentar cantidad
        if (e.target.classList.contains('aumentar-item')) {
            const index = e.target.dataset.index;
            carrito[index].cantidad++;
            actualizarCarrito();
            mostrarCarrito();
        }
        
        // Disminuir cantidad
        if (e.target.classList.contains('disminuir-item')) {
            const index = e.target.dataset.index;
            if (carrito[index].cantidad > 1) {
                carrito[index].cantidad--;
            } else {
                carrito.splice(index, 1);
            }
            actualizarCarrito();
            mostrarCarrito();
        }
        
        // Vaciar carrito
        if (e.target.id === 'vaciar-carrito') {
            carrito = [];
            actualizarCarrito();
            mostrarCarrito();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const buscador = document.getElementById('buscador-libros');
  const sugerenciasBox = document.getElementById('sugerencias-box');
  const contenedorProductos = document.getElementById('contenedor-productos');

  // Función para buscar coincidencia exacta
  function buscarCoincidenciaExacta(termino) {
    const terminoLower = termino.toLowerCase().trim();
    
    // Buscar por título exacto (ignorando mayúsculas)
    const libroPorTitulo = libros.find(libro => 
      libro.titulo.toLowerCase() === terminoLower
    );
    
    // Buscar por SKU exacto (comparación exacta)
    const libroPorSKU = libros.find(libro => 
      libro.sku === termino
    );

    return libroPorTitulo || libroPorSKU;
  }

  // Función para mostrar sugerencias
  function mostrarSugerencias(termino) {
    sugerenciasBox.innerHTML = '';
    if (termino.length < 1) {
      sugerenciasBox.style.display = 'none';
      return;
    }

    const terminoLower = termino.toLowerCase();
    const sugerencias = libros.filter(libro => 
      libro.titulo.toLowerCase().includes(terminoLower) || 
      libro.sku.includes(termino)
    ).slice(0, 5);

    if (sugerencias.length > 0) {
      sugerencias.forEach(libro => {
        const item = document.createElement('div');
        item.style.padding = '10px';
        item.style.cursor = 'pointer';
        item.style.borderBottom = '1px solid #eee';
        item.style.display = 'flex';
        item.style.justifyContent = 'space-between';
        
        item.innerHTML = `
          <div>
            <strong>${libro.titulo}</strong>
            <div style="font-size:12px;color:#666">${libro.autor}</div>
          </div>
          <div style="color:#888;font-family:monospace">SKU: ${libro.sku}</div>
        `;

        item.addEventListener('click', () => {
          // Redirigir directamente a la página del libro
          window.location.href = `detalle-libro.html?id=${libro.id}`;
        });

        sugerenciasBox.appendChild(item);
      });
      sugerenciasBox.style.display = 'block';
    } else {
      sugerenciasBox.style.display = 'none';
    }
  }

  // Evento al presionar Enter
  buscador.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const termino = buscador.value.trim();
      const libroExacto = buscarCoincidenciaExacta(termino);
      
      if (libroExacto) {
        // Redirigir si hay coincidencia exacta
        window.location.href = `detalle-libro.html?id=${libroExacto.id}`;
      } else {
        // Mostrar sugerencias si no hay coincidencia exacta
        mostrarSugerencias(termino);
      }
    }
  });

  // Mostrar sugerencias al escribir
  buscador.addEventListener('input', (e) => {
    mostrarSugerencias(e.target.value);
  });

  // Ocultar sugerencias al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!buscador.contains(e.target) && !sugerenciasBox.contains(e.target)) {
      sugerenciasBox.style.display = 'none';
    }
  });

  // Carga inicial mostrando todos los libros (opcional)
  // filtrarLibros(''); // Comentado ya que no necesitamos mostrar todos los libros al inicio
});