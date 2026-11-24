const botoesCurtir = document.querySelectorAll('.btn-like');

botoesCurtir.forEach((botao) => {
    botao.addEventListener('click', () => {
        const contador = botao.querySelector('span');
        const icone = botao.querySelector('i');
        let quantidade = Number(contador.textContent);

        if (botao.classList.contains('curtido')) {
            botao.classList.remove('curtido');
            contador.textContent = quantidade - 1;
            
            // Volta para o ícone vazado original
            if (icone.classList.contains('fa-heart')) {
                icone.classList.remove('fa-solid');
                icone.classList.add('fa-regular');
            } else if (icone.classList.contains('fa-thumbs-down')) {
                icone.classList.remove('fa-solid');
                icone.classList.add('fa-regular');
            }
        } else {
            botao.classList.add('curtido');
            contador.textContent = quantidade + 1;
            
            // Transforma o ícone em preenchido ao clicar
            if (icone.classList.contains('fa-heart')) {
                icone.classList.remove('fa-regular');
                icone.classList.add('fa-solid');
            } else if (icone.classList.contains('fa-thumbs-down')) {
                icone.classList.remove('fa-regular');
                icone.classList.add('fa-solid');
            }
        }
    });
});