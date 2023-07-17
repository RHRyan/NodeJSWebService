document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('login-form');
  const errorMessage = document.getElementById('error-message');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const data = {
      uname: username,
      pass: password
    };

    fetch('/api/login', {
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
      } else if (data.message) {
        // Login exitoso, redirige a la página de inicio
        window.location.href = 'index.html';
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
});
