// Año automático en footer
document.getElementById("year").textContent = new Date().getFullYear();

// Botón de alerta
const btnAlerta = document.getElementById("btnAlerta");
btnAlerta.addEventListener("click", () => {
  alert("¡Hola! Esta es una alerta personalizada creada con JavaScript ✅");
});

// Validación de formulario
const form = document.getElementById("contactForm");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");
const formStatus = document.getElementById("formStatus");

function setInvalid(input, message = "") {
  input.classList.add("is-invalid");
  input.classList.remove("is-valid");
  if (message) {
    const feedback = input.parentElement.querySelector(".invalid-feedback");
    if (feedback) feedback.textContent = message;
  }
}

function setValid(input) {
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");
}

function isEmailValid(value) {
  // Validación simple (suficiente para tarea)
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(value.trim());
}

function validateForm() {
  let ok = true;

  // Nombre
  if (nombre.value.trim().length < 2) {
    setInvalid(nombre, "Por favor, ingresa tu nombre (mínimo 2 caracteres).");
    ok = false;
  } else {
    setValid(nombre);
  }

  // Correo
  if (!isEmailValid(correo.value)) {
    setInvalid(correo, "Ingresa un correo válido (ej: usuario@correo.com).");
    ok = false;
  } else {
    setValid(correo);
  }

  // Mensaje
  if (mensaje.value.trim().length < 10) {
    setInvalid(mensaje, "El mensaje es obligatorio (mínimo 10 caracteres).");
    ok = false;
  } else {
    setValid(mensaje);
  }

  return ok;
}

// Validación en tiempo real (dinámica)
[nombre, correo, mensaje].forEach((input) => {
  input.addEventListener("input", () => {
    // No mostramos status general aquí, solo validación por campo
    validateForm();
  });
});

// Evento submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formStatus.textContent = "";
  formStatus.className = "";

  const ok = validateForm();

  if (!ok) {
    formStatus.textContent = "Revisa los campos marcados antes de enviar.";
    formStatus.classList.add("alert", "alert-danger");
    return;
  }

  // Simulación de envío exitoso
  formStatus.textContent = "¡Formulario enviado correctamente! ✅";
  formStatus.classList.add("alert", "alert-success");

  // Limpieza visual (opcional)
  form.reset();
  [nombre, correo, mensaje].forEach((input) => {
    input.classList.remove("is-valid", "is-invalid");
  });
});
