'use strict'

const botaoMostrarNumeros = document.getElementById('botao-mostrar-numeros')
const botaoMostrarNumerosPares = document.getElementById('botao-mostrar-numeros-pares')
const botaoMostrarNumerosDobro = document.getElementById('botao-mostrar-numeros-dobro')
const botaoMostrarNumerosProximoPar = document.getElementById('botao-mostrar-numeros-proximo-par')
const botaoMostrarNumerosMultiplos1 = document.getElementById('botao-mostrar-numeros-multiplos1')
const botaoMostrarNumerosMultiplos2 = document.getElementById('botao-mostrar-numeros-multiplos2')
const botaoMostrarNumerosProximoPrimo = document.getElementById('botao-mostrar-numeros-proximo-primo')

//Container para a saída dos números
function mostrarNumeros(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros')

    const ultimoIndice = numeros.length
    container.replaceChildren('')

    for (let contador=0; contador < ultimoIndice; contador++){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[contador]
        container.appendChild(novoSpan)
    }
}

//Container para mostrar os números pares
function mostrarNumerosPares(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros-pares')

    const ultimoIndice = numeros.length
    container.replaceChildren('')

    for (let contador=0; contador < ultimoIndice; contador++){
        if (numeros[contador] % 2 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }
    }
}

//Container para mostrar o dobro dos números
function mostrarNumerosDobro(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros-dobro')

    const ultimoIndice = numeros.length
    container.replaceChildren('')

    for (let indice=0; indice < ultimoIndice; indice++){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = Number(numeros[indice]) * 2
        container.appendChild(novoSpan)        
    }
}

//Container para mostrar o próximo número par
function mostrarNumerosProximoPar(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros-proximo-par')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++ ){
        if (numeros[indice] % 2 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number(numeros[indice]) + 2
            container.appendChild(novoSpan)
        }else{
            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number(numeros[indice]) + 1
            container.appendChild(novoSpan)
        }
    }
}

//Container para mostrar os multiplos de 3 e 5
function mostrarNumerosMultiplos1(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros-multiplos1')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++ ){

        if(numeros[indice] % 3 == 0 || numeros[indice] % 5 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

//Container para mostrar o os multiplos de 3 OU 5
function mostrarNumerosMultiplos2(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros-multiplos2')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++ ){

        if(numeros[indice] % 3 == 0 && numeros[indice] % 5 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

//Container para mostrar o próximo número primo
function mostrarNumerosProximoPrimo(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros-proximo-primo')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let contador = 0; contador < ultimoIndice; contador++) {
       
    }
}

botaoMostrarNumeros.addEventListener('click', mostrarNumeros)
botaoMostrarNumerosPares.addEventListener('click', mostrarNumerosPares)
botaoMostrarNumerosDobro.addEventListener('click', mostrarNumerosDobro)
botaoMostrarNumerosProximoPar.addEventListener('click', mostrarNumerosProximoPar)
botaoMostrarNumerosMultiplos1.addEventListener('click', mostrarNumerosMultiplos1)
botaoMostrarNumerosMultiplos2.addEventListener('click', mostrarNumerosMultiplos2)
botaoMostrarNumerosProximoPrimo.addEventListener('click', mostrarNumerosProximoPrimo)


