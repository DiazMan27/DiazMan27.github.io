// Efecto de partículas para el fondo
function createParticles() {
    const particleCount = 100;
    const container = document.body;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Tamaño aleatorio entre 2px y 6px
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Posición aleatoria
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        
        // Animación
        const duration = Math.random() * 20 + 10;
        particle.style.animation = `float ${duration}s linear infinite`;
        
        // Dirección de animación aleatoria
        const direction = Math.random() > 0.5 ? 1 : -1;
        particle.style.animationDirection = direction > 0 ? 'normal' : 'reverse';
        
        container.appendChild(particle);
    }
}

// Animación para el tooltip con delay diferente para cada tecnología
function setupTechHoverEffects() {
    const techItems = document.querySelectorAll('.tecnologia');
    
    techItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.05}s`;
    });
}

// Inicialización cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    setupTechHoverEffects();
    
    // Tu código existente para la animación del nombre
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

    setTimeout(escribir, 500);
});