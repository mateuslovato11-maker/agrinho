// Aguarda o documento carregar completamente
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona o botão e o texto extra
    const botaoAlerta = document.getElementById("btn-alerta");
    const textoExtra = document.getElementById("texto-extra");

    // Adiciona um evento de clique ao botão
    botaoAlerta.addEventListener("click", function() {
        // Verifica se o texto está escondido
        if (textoExtra.classList.contains("escondido")) {
            // Mostra o texto e muda o texto do botão
            textoExtra.classList.remove("escondido");
            botaoAlerta.textContent = "Ocultar Estatística";
        } else {
            // Esconde o texto novamente e volta o botão ao normal
            textoExtra.classList.add("escondido");
            botaoAlerta.textContent = "Ver Estatística";
        }
    });

});