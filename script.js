const btnMissao = document.getElementById("btnMissao");
const mensagem = document.getElementById("mensagem");

btnMissao.addEventListener("click", () => {
    mensagem.innerHTML =
    "Promover uma agricultura forte, inovadora e sustentável, garantindo produtividade, preservação ambiental e qualidade de vida para as futuras gerações.";
});

const btnSaibaMais = document.getElementById("btnSaibaMais");

btnSaibaMais.addEventListener("click", () => {
    document
        .getElementById("sobre")
        .scrollIntoView({
            behavior: "smooth"
        });
});