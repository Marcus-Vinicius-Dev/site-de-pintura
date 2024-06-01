document.addEventListener('DOMContentLoaded', function() {
    const miniaturas = document.querySelectorAll('.miniaturas img');
    const modal = document.querySelector('.modal');
    const imagemModal = document.querySelector('.imagem-modal');
    const fecharModal = document.querySelector('.fechar');
    const botaoAnterior = document.querySelector('.anterior');
    const botaoProximo = document.querySelector('.proximo');
    let indiceAtual = 0;

    miniaturas.forEach(function(miniatura, indice) {
        miniatura.addEventListener('click', function() {
            modal.style.display = 'block';
            imagemModal.src = this.src;
            indiceAtual = indice;
        });
    });

    fecharModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    botaoAnterior.addEventListener('click', function() {
        indiceAtual = (indiceAtual - 1 + miniaturas.length) % miniaturas.length;
        imagemModal.src = miniaturas[indiceAtual].src;
    });

    botaoProximo.addEventListener('click', function() {
        indiceAtual = (indiceAtual + 1) % miniaturas.length;
        imagemModal.src = miniaturas[indiceAtual].src;
    });
});
