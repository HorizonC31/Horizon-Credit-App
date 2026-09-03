const DEMO_EMAIL = "Shaunasims001@gmail.com";
const DEMO_PASSWORD = "ShaunaSims26";

const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const loginError = document.getElementById("loginError");

togglePassword.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "◉";
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "◉";
    }
});

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = passwordInput.value;

    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
        loginError.style.display = "none";

        // Dashboard will be connected here.
        window.location.href = "dashboard.html";
    } else {
        loginError.style.display = "block";
    }
});