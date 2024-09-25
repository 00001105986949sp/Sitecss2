// Navegação suave para as seções
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 20, // Ajuste para compensar o menu de navegação
            behavior: 'smooth'
        });
    });
});

// Exemplo de funcionalidade futura: expandir descrições ao clicar
document.querySelectorAll('.description').forEach(description => {
    description.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });
});
