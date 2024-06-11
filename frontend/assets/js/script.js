
/*________________Script do calendario______________________________*/
flatpickr("#dateRange", {
    mode: "range",
    dateFormat: "d-m-Y",
    locale: "pt",
    onChange: function (selectedDates, dateStr, instance) {
        console.log(selectedDates, dateStr);
    }
});

/*________________Script do campo de busca______________________________*/

document.getElementById("botao_busca").addEventListener("click", function () {
    // Verifica se todos os campos foram preenchidos
    var destino = document.getElementById("destino").value;
    var data = document.getElementById("dateRange").value;
    var pessoas = document.getElementById("campo_selecao").value;

    if (destino !== "" && data !== "" && pessoas !== "") {
        // Todos os campos estão preenchidos, exibir a lista de resultados
        document.getElementById("resultado_busca").style.display = "block";
        // COLOCAR CODIGO
    } else {
        alert("Por favor, preencha todos os campos antes de buscar.");
    }
});