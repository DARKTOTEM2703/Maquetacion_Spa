// Animación de entrada para el formulario
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".newsletter form");
  form.classList.add("animate-form");
});

// Efecto de enfoque en los campos del formulario
const emailInput = document.querySelector("#email");
emailInput.addEventListener("focus", () => {
  emailInput.style.boxShadow = "0 0 10px #ff3281";
});
emailInput.addEventListener("blur", () => {
  emailInput.style.boxShadow = "none";
});

// Mensaje de confirmación al enviar el formulario
const form = document.querySelector(".newsletter form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita el envío real del formulario
  const confirmationMessage = document.createElement("p");
  confirmationMessage.textContent =
    "¡Gracias por suscribirte! Pronto recibirás nuestras promociones.";
  confirmationMessage.style.color = "#ff3281";
  confirmationMessage.style.fontWeight = "bold";
  confirmationMessage.style.marginTop = "1rem";
  form.appendChild(confirmationMessage);

  // Limpia el campo de correo electrónico
  emailInput.value = "";

  // Elimina el mensaje después de 5 segundos
  setTimeout(() => {
    confirmationMessage.remove();
  }, 5000);
});
