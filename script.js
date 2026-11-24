const botoesCurtir = document.querySelectorAll('.btn-like');

botoesCurtir.forEach((botao) => {
    botao.addEventListener('click', () => {
        const contador = botao.querySelector('span');
        const icone = botao.querySelector('i');
        let quantidade = Number(contador.textContent);

        if (botao.classList.contains('curtido')) {
            botao.classList.remove('curtido');
            contador.textContent = quantidade - 1;
            // Volta para o coração vazado
            if (icone.classList.contains('fa-heart')) {
                icone.classList.remove('fa-solid');
                icone.classList.add('fa-regular');
            }
        } else {
            botao.classList.add('curtido');
            contador.textContent = quantidade + 1;
            // Transforma em coração preenchido
            if (icone.classList.contains('fa-heart')) {
                icone.classList.remove('fa-regular');
                icone.classList.add('fa-solid');
            }
        }
    });
});