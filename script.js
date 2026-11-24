// Seleciona todos os botões de curtir da página
const botoesCurtir = document.querySelectorAll('.btn-like');

botoesCurtir.forEach((botao) => {
    botao.addEventListener('click', () => {
        const contador = botao.querySelector('span');
        let quantidade = Number(contador.textContent);

        // Alterna entre curtido e não curtido
        if (botao.classList.contains('curtido')) {
            botao.classList.remove('curtido');
            contador.textContent = quantidade - 1;
        } else {
            botao.classList.add('curtido');
            contador.textContent = quantidade + 1;
        }
    });
});