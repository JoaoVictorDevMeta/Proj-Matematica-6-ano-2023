//Código 2
function criarTabelaMultiplicacao() {
  var lista = [];
  while (true) {
    var numero = parseInt(prompt("Número: "));
    if (numero <= 0 || parseInt(numero / 1) !== numero) {
      break;
    }
    lista.push(numero);
  }

  for (var i = 0; i < lista.length; i++) {
    var tabelaDiv = document.createElement("div");
    tabelaDiv.classList.add("tabela");
    tabelaDiv.style.marginTop = "20px";
    tabelaDiv.style.marginLeft = "20px";
    document.body.appendChild(tabelaDiv);

    for (var j = 1; j < 62; j++) {
      var resultados = lista[i] * j;

      var linhaParagrafo = document.createElement("p");
      linhaParagrafo.textContent = `${lista[i]} x ${j} = ${resultados}`;
      tabelaDiv.appendChild(linhaParagrafo);
    }
  }
}
