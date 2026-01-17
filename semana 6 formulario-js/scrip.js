// Obtener elementos
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const edad = document.getElementById("edad");
const btnEnviar = document.getElementById("btnEnviar");

// Función para validar nombre
function validarNombre() {
    if (nombre.value.length >= 3) {
        nombre.classList.add("valid");
        nombre.classList.remove("invalid");
        errorNombre.textContent = "";
        return true;
    } else {
        nombre.classList.add("invalid");
        nombre.classList.remove("valid");
        errorNombre.textContent = "El nombre debe tener al menos 3 caracteres.";
        return false;
    }
}

// Validar correo
function validarEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email.value)) {
        email.classList.add("valid");
        email.classList.remove("invalid");
        errorEmail.textContent = "";
        return true;
    } else {
        email.classList.add("invalid");
        email.classList.remove("valid");
        errorEmail.textContent = "Ingresa un correo válido.";
        return false;
    }
}

// Validar contraseña
function validarPassword() {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

    if (regex.test(password.value)) {
        password.classList.add("valid");
        password.classList.remove("invalid");
        errorPassword.textContent = "";
        return true;
    } else {
        password.classList.add("invalid");
        password.classList.remove("valid");
        errorPassword.textContent =
            "La contraseña debe tener 8 caracteres, un número y un símbolo.";
        return false;
    }
}

// Validar confirmación de contraseña
function validarConfirm() {
    if (confirmPassword.value === password.value && confirmPassword.value !== "") {
        confirmPassword.classList.add("valid");
        confirmPassword.classList.remove("invalid");
        errorConfirm.textContent = "";
        return true;
    } else {
        confirmPassword.classList.add("invalid");
        confirmPassword.classList.remove("valid");
        errorConfirm.textContent = "Las contraseñas no coinciden.";
        return false;
    }
}

// Validar edad
function validarEdad() {
    if (edad.value >= 18) {
        edad.classList.add("valid");
        edad.classList.remove("invalid");
        errorEdad.textContent = "";
        return true;
    } else {
        edad.classList.add("invalid");
        edad.classList.remove("valid");
        errorEdad.textContent = "Debes ser mayor o igual a 18.";
        return false;
    }
}

// Verificar si todos los campos son correctos
function validarFormulario() {
    if (
        validarNombre() &&
        validarEmail() &&
        validarPassword() &&
        validarConfirm() &&
        validarEdad()
    ) {
        btnEnviar.removeAttribute("disabled");
    } else {
        btnEnviar.setAttribute("disabled", true);
    }
}

// Eventos de validación en tiempo real
nombre.addEventListener("input", validarFormulario);
email.addEventListener("input", validarFormulario);
password.addEventListener("input", validarFormulario);
confirmPassword.addEventListener("input", validarFormulario);
edad.addEventListener("input", validarFormulario);

// Evento de envío
document.getElementById("registroForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("🎉 Formulario enviado correctamente. ¡Validaciones exitosas!");
});
