document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".newsletter form");
  form.classList.add("animate-form");
});

const emailInput = document.querySelector("#email");
emailInput.addEventListener("focus", () => {
  emailInput.style.boxShadow = "0 0 10px #ff3281";
});
emailInput.addEventListener("blur", () => {
  emailInput.style.boxShadow = "none";
});

const form = document.querySelector(".newsletter form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    alert("Por favor, introduce un correo electrónico válido.");
    return;
  }

  const confirmationMessage = document.createElement("p");
  confirmationMessage.textContent =
    "¡Gracias por suscribirte! Pronto recibirás nuestras promociones.";
  confirmationMessage.style.color = "#ff3281";
  confirmationMessage.style.fontWeight = "bold";
  confirmationMessage.style.marginTop = "1rem";
  form.appendChild(confirmationMessage);

  emailInput.value = "";

  setTimeout(() => {
    confirmationMessage.remove();
  }, 5000);
});
