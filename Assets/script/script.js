// EFECTO DE ESCRITURA PARA EL NOMBRE
document.addEventListener('DOMContentLoaded', function() {
    const nombreElement = document.getElementById("nombre");
    const texto = "Leandro";
    let index = 0;
    let isDeleting = false;
    let typingSpeed = 120; // Velocidad de escritura en ms
    let pauseTime = 2000; // Tiempo de pausa

    function escribir() {
        const currentText = nombreElement.textContent;
        
        if (!isDeleting && index < texto.length) {
            // Escribiendo
            nombreElement.textContent = currentText + texto.charAt(index);
            index++;
            setTimeout(escribir, typingSpeed);
        } else if (isDeleting && index > 0) {
            // Borrando
            nombreElement.textContent = currentText.substring(0, currentText.length - 1);
            index--;
            setTimeout(escribir, typingSpeed / 2);
        } else {
            // Cambiar modo (escribir/borrar)
            isDeleting = !isDeleting;
            setTimeout(escribir, isDeleting ? pauseTime : typingSpeed);
        }
    }

    // Iniciar efecto después de 500ms
    setTimeout(escribir, 500);

    // EFECTO ESCALONADO PARA TECNOLOGÍAS
    const techItems = document.querySelectorAll('.tecnologia');
    
    techItems.forEach((item, index) => {
        // Aplica un delay incremental a cada elemento
        item.style.transitionDelay = `${index * 0.05}s`;
    });
});