document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona todos os botões da barra lateral e todas as seções de tela
    const botoes = document.querySelectorAll(".btn-controle");
    const telas = document.querySelectorAll(".tela-painel");

    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            
            // 1. Remove a classe 'active' de todos os botões
            botoes.forEach(b => b.classList.remove("active"));
            
            // 2. Adiciona a classe 'active' apenas no botão clicado
            botao.classList.add("active");

            // 3. Remove a classe 'ativa' de todas as telas do painel
            telas.forEach(tela => tela.classList.remove("ativa"));

            // 4. Pega o valor do atributo 'data-target' do botão clicado
            const alvo = botao.getAttribute("data-target");

            // 5. Encontra a tela com o ID correspondente e a torna visível
            const telaAlvo = document.getElementById(alvo);
            if (telaAlvo) {
                telaAlvo.classList.add("ativa");
            }
        });
    });
});