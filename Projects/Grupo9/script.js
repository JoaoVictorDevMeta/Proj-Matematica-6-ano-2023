function checar(q){
  resp = document.getElementById(q).querySelector("p")
  if (document.getElementById(q).querySelector("#certo").checked){resp.innerHTML = "Correto!";}else {resp.innerHTML = "Errou seu idiota, você é verdadeiramente um merda, você não presta para nada, VOCÊ É INUTIL''!!!"}
}
function redirect(){
  window.location.href = "http://www.w3schools.com"
}