/*________________Script do calendario______________________________*/
flatpickr("#dateRange", {
    mode: "range",
    dateFormat: "d-m-Y",
    locale: "en",
    onChange: function (selectedDates, dateStr, instance) {
        console.log(selectedDates, dateStr);
    }
});

/*________________Script do campo de busca______________________________*/
document.addEventListener("DOMContentLoaded", function () {
    flatpickr("#dateRange", {
        mode: "range",
        dateFormat: "d-m-Y",
        locale: "en",
        onChange: function (selectedDates, dateStr, instance) {
            console.log(selectedDates, dateStr);
        }
    });

    document.getElementById("botao_busca").addEventListener("click", function () {
        var destino = document.getElementById("destino").value;
        var dateRange = document.getElementById("dateRange").value;
        var pessoas = document.getElementById("campo_selecao").value;

        if (destino !== "" && dateRange !== "" && pessoas !== "") {
            document.getElementById("resultado_busca").style.display = "block";

            var dates = dateRange.split(" to ");
            var startDate = new Date(dates[0].split("-").reverse().join("-"));
            var endDate = new Date(dates[1].split("-").reverse().join("-"));
            var numDias = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

            var precoPorNoite;
            if (destino === "rio") precoPorNoite = 200;
            else if (destino === "bh") precoPorNoite = 150;
            else if (destino === "pe") precoPorNoite = 120;

            var precoTotal = (numDias * precoPorNoite).toFixed(2);

            var quartosDisponiveis = [
                { nome: "Quarto Single", capacidade: "1", camas: "1 cama de solteiro" },
                {nome: "Quarto Friends", capacidade: "2", camas: "2 camas de solteiro"},
                { nome: "Quarto Duplo", capacidade: "2", camas: "1 cama de casal" },
                { nome: "Quarto Triplo", capacidade: "3", camas: "1 cama de casal, 1 cama de solteiro" },
                { nome: "Suíte Familiar", capacidade: "4", camas: "2 camas de casal" },
                { nome: "Cobertura Luxo", capacidade: "5+", camas: "2 camas de casal, 3 camas de solteiro" }
            ];

            var resultado = quartosDisponiveis.filter(quarto => {
                if (pessoas === "5+") {
                    return quarto.capacidade === "5+";
                } else {
                    return parseInt(quarto.capacidade) >= parseInt(pessoas);
                }
            });

            var resultadoBuscaDiv = document.getElementById("resultado_busca");
            resultadoBuscaDiv.innerHTML = "";

            resultado.forEach(quarto => {
                var quartoDiv = document.createElement("div");
                quartoDiv.className = "quarto";

                quartoDiv.innerHTML = `
                    <div class="quarto_card">
                        <img src="../assets/img/Hotel_Pernambuco.png" alt="${quarto.nome}" class="quarto_imagem">
                        <div class="quarto_detalhes">
                            <h2 class="quarto_nome">${quarto.nome}</h2>
                            <p class="quarto_camas">${quarto.camas}</p>
                            <p class="quarto_preco">R$ ${precoTotal}</p>
                            <button class="quarto_button">Reservar Quarto</button>
                        </div>
                    </div>
                `;

                resultadoBuscaDiv.appendChild(quartoDiv);
            });
        } else {
            alert("Por favor, preencha todos os campos antes de buscar.");
        }
    });
});
