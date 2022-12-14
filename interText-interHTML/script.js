const elementoH1 = document.querySelector("h1");
console.log(elementoH1)
console.log(elementoH1.innerText)

const elementoMain = document.querySelector("main");
console.log(elementoMain)
console.log(elementoMain.innerText)
console.log(elementoMain.innerHTML)

elementoH1.innerText = "Novo título com JS"

elementoMain.innerHTML = `
<h2> Novo Subtítulo</h2>
<ul>
<li>Elemento de lista jS 01</li>
<li>Elemento de lista jS 02</li>
<li>Elemento de lista jS 03</li>
</ul>
`
