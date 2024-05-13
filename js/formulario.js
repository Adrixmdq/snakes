  function validarFormulario(event) {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;
    const ocupacion = document.getElementById('ocupacion').value;

    // Validar si todos los campos requeridos están completos
    if (!nombre || !email || !telefono || !mensaje || !ocupacion) {
        mostrarMensaje('error', "Por favor, complete todos los campos obligatorios.");
      return false; // Evita el envío del formulario
    }

    mostrarMensaje('enviado', "¡Los datos se enviaron correctamente!");
    return true; // Permite el envío del formulario
  }
  function mostrarMensaje(tipo, mensaje) {
    const mensajeEstado = document.getElementById('mensajeEstado');
    mensajeEstado.textContent = mensaje;
    mensajeEstado.className = tipo;
    mensajeEstado.style.display = 'block';
    if (tipo === 'enviado') {
        mensajeEstado.style.color = 'green';
      setTimeout(() => {
        mensajeEstado.style.display = 'none';
      }, 3000);
      
    }
    else{
        mensajeEstado.style.color = 'red';}
   
  }