const div = document.querySelector("div");

//verifica se o elemento possui uma classe = True
/* 
const incluiClasse = div.classList.contains("borda-azul")

console.log(incluiClasse) */

//verifica se o elemento possui uma classe = False
const incluiClasse = div.classList.contains("texto-novo")

console.log(incluiClasse)

//adicionar classe ao elemento
div.classList.add("texto-novo")

//remover classe do elemento
div.classList.remove("borda-azul")

div.classList.toggle("borda-azul")
div.classList.toggle("borda-azul")

