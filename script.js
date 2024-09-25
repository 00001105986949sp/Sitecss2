document.querySelectorAll('.toggle-description').forEach(button => {
    button.addEventListener('click', function() {
        const description = this.nextElementSibling;
        description.classList.toggle('hidden');
        this.textContent = description.classList.contains('hidden') ? 'Mostrar Descrição' : 'Esconder Descrição';
    });
});
