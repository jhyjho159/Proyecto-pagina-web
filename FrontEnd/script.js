document.querySelectorAll('.tag-toggle input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      this.closest('.tag-toggle').classList.toggle('checked', this.checked);
    });
  });

  // Código para manejar el modal de inicio de sesión
document.addEventListener('DOMContentLoaded', function() {
  // Obtener elementos del DOM
  const botonAbrirLogin = document.getElementById('abrir-login');
  const modal = document.getElementById('modal-login');
  const botonCerrarLogin = document.getElementById('cerrar-login');
  
  // Función para abrir el modal
  function abrirModal() {
    modal.style.display = 'flex';
  }
  
  // Función para cerrar el modal
  function cerrarModal() {
    modal.style.display = 'none';
  }
  
  // Event listeners
  if (botonAbrirLogin) {
    botonAbrirLogin.addEventListener('click', abrirModal);
  }
  
  if (botonCerrarLogin) {
    botonCerrarLogin.addEventListener('click', cerrarModal);
  }
  
  // Cerrar el modal si se hace clic fuera del contenido
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      cerrarModal();
    }
  });
  
  // Evitar que el formulario recargue la página al enviar
  const formularioLogin = document.querySelector('.formulario-login');
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
      cerrarModal();
    });
  }
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

