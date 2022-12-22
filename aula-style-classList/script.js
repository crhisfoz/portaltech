const titulo = document.querySelector("h2")

titulo.style.color = "blueviolet";
titulo.style.fontSize = "24px";

//primeira interação do usuário

const username =  document.getElementById("login-usuario");

const errorText = document.querySelectorAll(".error-text")

username.classList.add("error")

errorText[0].classList.add("visible")

console.log(username);

//segunda interação do usuário: "acerta o username" mas erra a senha 

username.classList.remove("error")
errorText[0].classList.remove("visible")
username.classList.add("correct")

const senha = document.getElementById("login-senha");
senha.classList.add("error")

errorText[1].classList.add("visible")


