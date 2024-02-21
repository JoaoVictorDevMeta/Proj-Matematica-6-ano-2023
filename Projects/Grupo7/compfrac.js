
function compararFracao() {
  // Obtendo os números do usuário
  var num1 = parseInt(prompt("Digite o primeiro número: "));
  var den1 = parseInt(prompt("Digite o denominador do primeiro número: "));
  var frac1 = `${num1}/${den1}`;
  alert(frac1);

  var num2 = parseInt(prompt("Digite o segundo número: "));
  var den2 = parseInt(prompt("Digite o denominador do segundo número: "));
  var frac2 = `${num2}/${den2}`;
  alert(frac2);

  // Comparando as frações
  if ((num1 / den1) > (num2 / den2)) {
    alert("O primeiro número é maior que o segundo número");
  } else {
    alert("O segundo número é maior que o primeiro número");
  }
}