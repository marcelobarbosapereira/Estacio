let contadorAtual = 0
const divContador = document.querySelector("#contadorAtual")
const botaoMenos = document.querySelector("#botaoMenos")
const botaoMais = document.querySelector("#botaoMais")

divContador.innerHTML = contadorAtual

botaoMenos.addEventListener('click', function(){
    contadorAtual--
    divContador.innerHTML = contadorAtual
    console.log(contadorAtual)
})

botaoMais.addEventListener('click', function(){
    contadorAtual++
    divContador.innerHTML = contadorAtual
    console.log(contadorAtual)
})
