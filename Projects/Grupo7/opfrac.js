
// Função para aguardar a entrada do usuário de forma assíncrona
async function obterEntrada(mensagem) {
  return new Promise(resolve => {
    const entrada = prompt(mensagem);
    resolve(entrada);
  });
}

function calcularMDC(x, y) {
  while (y) {
    var temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}

function calcularMMC(x, y) {
  return x * y / calcularMDC(x, y);
}

function criarFracao(numerador, denominador) {
  try {
    return new Fraction(numerador, denominador);
  } catch (error) {
    throw new Error("O denominador não pode ser zero.");
  }
}

function criarElemento(tag, textContent) {
  var element = document.createElement(tag);
  element.classList.add("paragrafo")
  element.textContent = textContent;
  return element;
}

function calcularOperacao(op, num1, den1, num2, den2) {
  var resultadoDiv = document.createElement("div");

  if (isNaN(num1) || isNaN(den1) || isNaN(num2) || isNaN(den2)) {
    alert("Por favor, insira números válidos.");
    return;
  }

  if (den1 !== den2) {
    var denominadores = [den1, den2];
    var mmc = calcularMMC(...denominadores);
    var nn1 = (mmc / den1) * num1;
    var nn2 = (mmc / den2) * num2;

    resultadoDiv.appendChild(criarElemento("p", `MMC dos denominadores: ${mmc}`));
    resultadoDiv.appendChild(criarElemento("p", "Operações do numerador novo com as frações antigas:"));
    resultadoDiv.appendChild(criarElemento("p", `Para o numerador da fração nova 1: (${mmc}/${den1})x${num1} = ${nn1}`));
    resultadoDiv.appendChild(criarElemento("p", `Para o numerador da fração nova 2: (${mmc}/${den2})x${num2} = ${nn2}`));

    if (op === "+") {
      resultadoDiv.appendChild(criarElemento("p", `Agora, podemos calcular diretamente com ${nn1}/${mmc} + ${nn2}/${mmc} = ${nn1 + nn2}/${mmc}`));
      resultadoDiv.appendChild(criarElemento("p", `O resultado é: ${nn1 + nn2}/${mmc}`));
    } else if (op === "-") {
      resultadoDiv.appendChild(criarElemento("p", `Agora, podemos calcular diretamente com ${nn1}/${mmc} - ${nn2}/${mmc} = ${nn1 - nn2}/${mmc}`));
      resultadoDiv.appendChild(criarElemento("p", `O resultado é: ${nn1 - nn2}/${mmc}`));
    }
  } else {
    if (op === "+") {
      resultadoDiv.appendChild(criarElemento("p", `A soma é: ${num1}/${den1} + ${num2}/${den2} = ${num1 + num2}/${den1}`));
    } else if (op === "-") {
      resultadoDiv.appendChild(criarElemento("p", `A subtração é: ${num1}/${den1} - ${num2}/${den2} = ${num1 - num2}/${den1}`));
    } else {
      resultadoDiv.appendChild(criarElemento("p", "Operação inválida."));
    }
  }

  document.body.appendChild(resultadoDiv);
}

async function executarOperacoes() {
  alert("ATENÇÃO: Este programinha só faz cálculos com frações NÃO mistas\nO ciclo é infinito, então digite uma letra exatamente para sair");

  try {
    var num1 = parseInt(await obterEntrada("Digite o numerador 1: "));
    var den1 = parseInt(await obterEntrada("Digite o denominador 1: "));
    var num2 = parseInt(await obterEntrada("Digite o numerador 2: "));
    var den2 = parseInt(await obterEntrada("Digite o denominador 2: "));
  } catch (error) {
    alert("Você digitou uma letra ou um valor inválido. Saindo do programa...");
    return;
  }

  var op = await obterEntrada("Digite a operação que deseja realizar (+, -): ");

  calcularOperacao(op, num1, den1, num2, den2);
}