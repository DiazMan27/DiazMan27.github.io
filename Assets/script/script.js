// Cambio de nombre dinámico
document.getElementById("nombre").innerText = "";

const nombreElement = document.getElementById("nombre");
const texto = "Leandro"; // Nombre que se va a escribir y borrar
let index = 0;
let isDeleting = false;

function escribir() {
    if (!isDeleting && index < texto.length) {
        nombreElement.innerText += texto.charAt(index);
        index++;
        setTimeout(escribir, 150); // Velocidad de escritura
    } else if (isDeleting && index > 0) {
        nombreElement.innerText = texto.substring(0, index - 1);
        index--;
        setTimeout(escribir, 100); // Velocidad de borrado
    } else {
        isDeleting = !isDeleting; // Cambiar de modo: escribir o borrar
        setTimeout(escribir, 1000); // Esperar un poco antes de empezar a borrar
    }
}

escribir(); // Iniciar la animación

