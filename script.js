document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("nivel-tecnologia");
    const valorSlider = document.getElementById("valor-slider");
    
    const barraProducao = document.getElementById("barra-producao");
    const barraAmbiente = document.getElementById("barra-ambiente");
    
    const txtProducao = document.getElementById("txt-producao");
    const txtAmbiente = document.getElementById("txt-ambiente");

    function atualizarSimulador() {
        const valor = parseInt(slider.value);
        valorSlider.textContent = `${valor}%`;

        // Lógica Matemática de Impacto do Equilíbrio
        // À medida que a tecnologia sobe, ambos os indicadores melhoram drasticamente.
        let efProducao = 40 + (valor * 0.55); // Vai de 40% a 95%
        let efAmbiente = 20 + (valor * 0.75); // Vai de 20% a 95%

        // Atualiza a largura das barras graficamente
        barraProducao.style.width = `${efProducao}%`;
        barraAmbiente.style.width = `${efAmbiente}%`;

        // Modifica dinamicamente os textos com base na complexidade do equilíbrio
        if (valor < 30) {
            barraAmbiente.style.backgroundColor = "#cc3333"; // Vermelho (Alerta)
            txtProducao.textContent = "Produtividade estagnada. Dependência severa de fatores climáticos e safras inconstantes.";
            txtAmbiente.textContent = "Degradação crítica. Alta taxa de emissão de carbono por tonelada produzida e exaustão hídrica.";
        } else if (valor >= 30 && valor <= 75) {
            barraAmbiente.style.backgroundColor = "#3b533e"; // Verde Padrão
            txtProducao.textContent = "Crescimento linear estável. Otimização moderada de processos logísticos e de colheita.";
            txtAmbiente.textContent = "Manejo conservacionista ativo. Redução progressiva do impacto antrópico no bioma nativo.";
        } else {
            barraAmbiente.style.backgroundColor = "#1a5f7a"; // Azul Tecnológico (Excelente)
            txtProducao.textContent = "Hiper-rendimento preditivo. Integração total de inteligência artificial gerando safras recordes em áreas reduzidas.";
            txtAmbiente.textContent = "Impacto regenerativo neutro. Recuperação de aquíferos locais e sequestro ativo de carbono atmosférico.";
        }
    }

    // Ouve o movimento do slider
    slider.addEventListener("input", atualizarSimulador);

    // Inicializa a função no carregamento
    atualizarSimulador();
});