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
      categoria: formData.get('categoria'),
      hora: formData.get('hora')
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

          const idCell = document.createElement('td'); // Celda para el ID
          idCell.textContent = recordatorio.Id; // Mostrar el ID del registro

          const fechaCell = document.createElement('td');
          fechaCell.textContent = recordatorio.Fecha;

          const nombreCell = document.createElement('td');
          nombreCell.textContent = recordatorio.Nombre;

          const descripcionCell = document.createElement('td');
          descripcionCell.textContent = recordatorio.Descripcion;

          const categoriaCell = document.createElement('td');
          categoriaCell.textContent = recordatorio.Categoria;

          const horaCell = document.createElement('td');
          horaCell.textContent = recordatorio.hora;

          const actionsCell = document.createElement('td');
          const editButton = document.createElement('button');
          editButton.textContent = 'Editar';
          editButton.classList.add('btn', 'btn-success');
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Eliminar';
          deleteButton.classList.add('btn', 'btn-danger');

          editButton.addEventListener('click', function() {
            // Implementar la lógica para editar el recordatorio
            console.log('Editar:', recordatorio.Id);
          });

          deleteButton.addEventListener('click', function() {
            deleteRecordatorio(recordatorio.Id);
          });

          actionsCell.appendChild(editButton);
          actionsCell.appendChild(deleteButton);

          row.appendChild(idCell); // Agregar la celda del ID al inicio de la fila
          row.appendChild(fechaCell);
          row.appendChild(nombreCell);
          row.appendChild(descripcionCell);
          row.appendChild(categoriaCell);
          row.appendChild(horaCell);
          row.appendChild(actionsCell);

          tableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

   function deleteRecordatorio(id) {
    // Realizar una petición DELETE para eliminar el recordatorio del backend
    fetch(`/api/recordatorios/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.message) {
          alert(data.message);
          loadRecordatorios(); // Volver a cargar los recordatorios después de eliminar
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  loadRecordatorios();
});
