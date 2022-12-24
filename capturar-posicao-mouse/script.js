let elementoClicado = document.getElementById("elemento-clicado");

let botaoTempo = document.getElementById("botao-tempo");

let tempo = document.getElementById("tempo");

botaoTempo.addEventListener("click", function(e){
    console.log(e.timeStamp)
    tempo.innerText = e.timeStamp

})

document.addEventListener("click", function(e){
    console.log(e.target)

    elementoClicado.innerText = e.target.id

})