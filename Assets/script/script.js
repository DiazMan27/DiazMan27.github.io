document.addEventListener('DOMContentLoaded', function() {
    const nombreElement = document.getElementById("nombre");
    const texto = "Leandro";
    let index = 0;
    let isDeleting = false;
    let typingSpeed = 120;
    let pauseTime = 2000;

    function escribir() {
        const currentText = nombreElement.textContent;
        
        if (!isDeleting && index < texto.length) {
            nombreElement.textContent = currentText + texto.charAt(index);
            index++;
            setTimeout(escribir, typingSpeed);
        } else if (isDeleting && index > 0) {
            nombreElement.textContent = currentText.substring(0, currentText.length - 1);
            index--;
            setTimeout(escribir, typingSpeed / 2);
        } else {
            isDeleting = !isDeleting;
            setTimeout(escribir, isDeleting ? pauseTime : typingSpeed);
        }
    }

    // Iniciar animación después de un breve retraso
    setTimeout(escribir, 500);
});