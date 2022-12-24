let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

function atualizarSubtotal(){
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
}

atualizarSubtotal()

//Capturar elementos do Dom

let btnAdicionarProduto = document.getElementById("btn-adicionar-produto-01");

let quantidadeProduto01 = document.getElementById("quantidade-produto-01");

const valorProduto = 11.66


//Declarar funções

function adicionarUm() {
  //manipular o input do
  quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1;
  //manipular a quantidade do subtotal
  subtotalInfo.quantidade += 1
  //manipular o valor do subtotal
  subtotalInfo.valor =  subtotalInfo.valor + valorProduto;

  atualizarSubtotal();
}

//definir os eventos

btnAdicionarProduto.addEventListener("click", adicionarUm)



