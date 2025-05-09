function handleFileUpload() {
  const fileInput = document.getElementById('file-input');
  const fileNameDisplay = document.getElementById('file-name');

  if (fileInput.files.length > 0) {
    const fileName = fileInput.files[0].name;
    fileNameDisplay.textContent = `Archivo seleccionado: ${fileName}`;
  } else {
    fileNameDisplay.textContent = 'No se ha seleccionado ningún archivo';
  }
}

// Función para abrir el cuadro de configuración
function openConfigDialog() {
  const configDialog = document.getElementById('config-dialog');
  configDialog.style.display = 'block';
}

// Función para guardar la consigna
function saveConfig() {
  const configText = document.getElementById('config-text').value;

  if (configText.trim() === '') {
    alert('Por favor, escribe una consigna para la configuración.');
  } else {
    // Puedes guardar la consigna en algún lugar (por ejemplo, en el localStorage, enviar al backend, etc.)
    alert('Configuración guardada: ' + configText);
    document.getElementById('config-dialog').style.display = 'none'; // Cerrar el cuadro
    document.getElementById('config-text').value = ''; // Limpiar el campo de texto
  }
}
