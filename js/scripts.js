document.addEventListener('DOMContentLoaded', function() {
    const miniaturas = document.querySelectorAll('.miniaturas img');
    const modal = document.querySelector('.modal');
    const imagemModal = document.querySelector('.imagem-modal');
    const fecharModal = document.querySelector('.fechar');

    miniaturas.forEach(function(miniatura) {
        miniatura.addEventListener('click', function() {
            modal.style.display = 'block';
            imagemModal.src = this.src;
        });
    });

    fecharModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
});
