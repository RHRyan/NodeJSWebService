document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('signup-form');
  const errorMessage = document.getElementById('error-message');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const user = document.getElementById('user').value;
    const contrasena = document.getElementById('contrasena').value;

    const data = {
      nombre: nombre,
      user: user,
      contrasena: contrasena
    };

    // Realizar una petición POST para registrar el usuario en el backend
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        errorMessage.textContent = data.error;
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
      } else if (data.message) {
        successMessage.textContent = data.message;
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        form.reset();
        setTimeout(function() {
          window.location.href = 'login.html';
        }, 3000); // Redireccionar al formulario de inicio de sesión después de 3 segundos
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
});
