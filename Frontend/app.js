document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('recordatorio-form');
    const tableBody = document.getElementById('recordatorios-body');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const formData = new FormData(form);
      const recordatorio = {
        fecha: formData.get('fecha'),
        nombre: formData.get('nombre'),
        descripcion: formData.get('descripcion'),
        categoria: formData.get('categoria')
      };
  
      // Realizar una petición POST para agregar el recordatorio al backend
      fetch('/api/recordatorios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(recordatorio)
      })
      .then(response => response.json())
      .then(data => {
        if (data.message) {
          alert(data.message);
          form.reset();
          loadRecordatorios();
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    });
  
    function loadRecordatorios() {
      // Realizar una petición GET para obtener los recordatorios del backend
      fetch('/api/recordatorios')
      .then(response => response.json())
      .then(recordatorios => {
        tableBody.innerHTML = '';
  
        recordatorios.forEach(recordatorio => {
          const row = document.createElement('tr');
  
          const fechaCell = document.createElement('td');
          fechaCell.textContent = recordatorio.Fecha;
  
          const nombreCell = document.createElement('td');
          nombreCell.textContent = recordatorio.Nombre;
  
          const descripcionCell = document.createElement('td');
          descripcionCell.textContent = recordatorio.Descripcion;
  
          const categoriaCell = document.createElement('td');
          categoriaCell.textContent = recordatorio.Categoria;
  
          const actionsCell = document.createElement('td');
          const editButton = document.createElement('button');
          editButton.textContent = 'Editar';
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Eliminar';
  
          editButton.addEventListener('click', function() {
            // Implementar la lógica para editar el recordatorio
            console.log('Editar:', recordatorio.Id);
          });
  
          deleteButton.addEventListener('click', function() {
            // Implementar la lógica para eliminar el recordatorio
            console.log('Eliminar:', recordatorio.Id);
          });
  
          actionsCell.appendChild(editButton);
          actionsCell.appendChild(deleteButton);
  
          row.appendChild(fechaCell);
          row.appendChild(nombreCell);
          row.appendChild(descripcionCell);
          row.appendChild(categoriaCell);
          row.appendChild(actionsCell);
  
          tableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  
    loadRecordatorios();
  });
  