const numero = document.querySelector("h1");

const botao = document.querySelector("button");

let contagem = 0;



botao.addEventListener("click", function adicionarUm(){
    contagem = contagem + 1
    
    numero.innerText = contagem;

    console.log(contagem)
}
);