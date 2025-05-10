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