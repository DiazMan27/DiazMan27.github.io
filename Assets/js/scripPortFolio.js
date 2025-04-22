document.addEventListener('DOMContentLoaded', function() {
  // Tema oscuro/claro
  const themeToggle = document.querySelector('.theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  // Aplicar tema guardado
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateToggleIcon(currentTheme);
  
  // Cambiar tema al hacer clic
  themeToggle.addEventListener('click', () => {
      const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateToggleIcon(newTheme);
  });
  
  function updateToggleIcon(theme) {
      const icon = theme === 'dark' ? 'fa-sun' : 'fa-moon';
      themeToggle.innerHTML = `<i class="fas ${icon}"></i>`;
  }
  
  // Formulario de contacto
  document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Gracias por tu mensaje. Me pondré en contacto contigo pronto.');
      this.reset();
  });
  
  // Año actual en el footer
  document.getElementById('current-year').textContent = new Date().getFullYear();

    // Tecnologías y herramientas (manipulación DOM)
    const technologies = ['HTML5', 'CSS3', 'JavaScript', 'Python', 'C#'];
    const tools = ['Git', 'VS Code', 'Figma', 'Jira','FileZilla'];
    const skillsDisplay = document.getElementById('skillsDisplay');
    const toggleBtn = document.getElementById('toggleSkills');
    let showTechnologies = true;

    // Función para alternar entre tecnologías y herramientas
    function toggleSkillsView() {
        showTechnologies = !showTechnologies;
        
        skillsDisplay.innerHTML = '';
        const itemsToShow = showTechnologies ? technologies : tools;
        
        itemsToShow.forEach(item => {
            const skillTag = document.createElement('span');
            skillTag.className = 'skill-tag';
            skillTag.textContent = item;
            skillsDisplay.appendChild(skillTag);
        });
        
        toggleBtn.textContent = showTechnologies ? 'Mostrar Herramientas' : 'Mostrar Tecnologías';
    }

    // Inicializar mostrando tecnologías
    toggleSkillsView();
    
    // Evento para el botón
    toggleBtn.addEventListener('click', toggleSkillsView);
});