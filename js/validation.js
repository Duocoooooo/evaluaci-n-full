const validateEmail = (email) => {
    const allowedDomains = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];
    const isValidFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const hasAllowedDomain = allowedDomains.some(domain => email.endsWith(domain));
    return isValidFormat && hasAllowedDomain;
};

const validateRUN = (run) => {
    // Min 7, Max 9, solo letras y números
    return run.length >= 7 && run.length <= 9 && /^[0-9kK]{7,9}$/.test(run);
};

// Ejemplo de uso en formulario de Login
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    const email = document.getElementById('email').value;
    if(!validateEmail(email)) {
        e.preventDefault();
        alert("Correo no válido. Solo se permiten @duoc.cl, @profesor.duoc.cl y @gmail.com");
    }
});