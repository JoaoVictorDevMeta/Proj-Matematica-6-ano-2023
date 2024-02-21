
function contarCasasDecimais(n) {
  // Convertendo o número para string
  var numeroStr = n.toString();

  // Dividindo a parte inteira e a parte decimal
  var partes = numeroStr.split(".");

  // Verificando se há uma parte decimal
  if (partes.length === 1) {
    return 0;  // Não há parte decimal
  }

  // Retornando o comprimento da parte decimal
  return partes[1].length;
}
function converterFracaoDecimal() {
  // Obtendo a escolha do usuário
  var opc = prompt("Você quer converter de fração para decimal ou o inverso? (f/i): ");

  // Verificando a escolha do usuário
  if (opc === "f") {
    var num = parseInt(prompt("Digite o numerador: "));
    var den = parseInt(prompt("Digite o denominador: "));
    alert(`O resultado de fração para decimal é ${num / den}`);
  } else if (opc === "i") {
    var n = parseFloat(prompt("Digite um número decimal, substituindo a vírgula pelo ponto: "));
    var dn = 1;

    for (var i = 0; i < contarCasasDecimais(n); i++) {
      dn *= 10;
      n *= 10;
    }

    n = parseInt(n);
    var divs = [];

    for (var i = 1; i <= dn; i++) {
      if (dn % i === 0) {
        divs.push(i);
      }
    }

    for (var i = 0; i < divs.length; i++) {
      if (n % divs[i] === 0 && dn % divs[i] === 0) {
        dn /= divs[i];
        n /= divs[i];
      }
    }

    alert(`O resultado de decimal para fração é ${parseInt(n)}/${parseInt(dn)}`);
  } else {
    alert("Escolha inválida.");
  }
}