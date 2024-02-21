function limparTela() {
  const tabela = document.getElementsByClassName("tabela")
  const paragrafo = document.getElementsByClassName("paragrafo")

  for (let i = 0; i < paragrafo.length; i++) {
    paragrafo[i].remove()
  }

  for (let i = 0; i < tabela.length; i++) {
    tabela[i].remove()
  }
}