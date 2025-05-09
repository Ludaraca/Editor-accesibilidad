const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const highContrastToggle = document.getElementById("highContrastToggle");
const fontSizeSelector = document.getElementById("fontSizeSelector");

// Cargar imagen
document.getElementById("imageUpload").addEventListener("change", function (e) {
  const file = e.target.files[0];
  if (!file) return;

  const img = new Image();
  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
  };
  img.src = URL.createObjectURL(file);
});

// Aplicar filtros
function applyFilter(type) {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    if (type === "grayscale") {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = data[i + 1] = data[i + 2] = avg;
    } else if (type === "invert") {
      data[i] = 255 - data[i];       // R
      data[i + 1] = 255 - data[i + 1]; // G
      data[i + 2] = 255 - data[i + 2]; // B
    }
  }

  ctx.putImageData(imageData, 0, 0);
}

// Texto a voz
function readText() {
  const text = document.getElementById("textToRead").value;
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}

// Accesibilidad
highContrastToggle.addEventListener("change", function () {
  document.body.classList.toggle("high-contrast", this.checked);
});

fontSizeSelector.addEventListener("change", function () {
  document.body.style.fontSize = this.value;
});
