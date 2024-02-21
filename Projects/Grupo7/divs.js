
// Código 1
function verificarPrimo() {
  var num = parseInt(prompt("Número:"));
  var divs = [];

  for (var i = 1; i <= num; i++) {
    if (num % i === 0) {
      console.log("O número " + num + " é divisível por " + i);
      divs.push(i);
    }
  }

  var resultadoDiv = document.createElement("p");
resultadoDiv.classList.add("paragrafo")
  resultadoDiv.textContent = "Lista de divisores: " + divs.join(", ");
  document.body.appendChild(resultadoDiv);

  var resultadoQuantidadeDiv = document.createElement("p");
  resultadouQuantidadeDiv.classList.add("paragrafo")
  resultadoQuantidadeDiv.textContent = "Quantos divisores? " + divs.length;
  document.body.appendChild(resultadoQuantidadeDiv);

  if (divs.length === 2) {
    var resultadoPrimo = document.createElement("p");
    resultadoPrimo.textContent = "É um número primo";
    document.body.appendChild(resultadoPrimo);
  } else {
    var resultadoNaoPrimo = document.createElement("p");
    resultadoNaoPrimo.textContent = "Não é um número primo";
    document.body.appendChild(resultadoNaoPrimo);
  }
}