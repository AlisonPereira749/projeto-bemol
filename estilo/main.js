const inputTempo = document.querySelector("#inputSlideTempo")

let tempo = document.querySelector(".contagemTempo")

const button = document.getElementsByClassName("simulatorButton")[0]

let pontosAcumulados = 0

//Função
function mostarTempo () {
    let spanMeses = tempo;
    spanMeses.innerText = `${inputTempo.value} meses teste`
}

inputTempo.addEventListener("change", mostarTempo)

function calcularPontos () {
    let pontosMes = document.querySelector("#pontosMes")
    let pontosDia = document.querySelector("#pontosDia")
    let inputValor = document.getElementById("valorInput").value
    let meses = inputTempo.value

    if (meses == 0) {
        pontosMes.innerText = 0
        if (inputValor < 40) {
            pontosDia.innerText = 0;
        } else {
            let resultado = inputValor / 40
            pontosDia.innerText = resultado
        }
    } else {
        if (inputValor < 40) {
            pontosDia.innerText = 0
            pontosMes.innerText = 0
        } else {
            let resultado = inputValor / 40
            pontosDia.innerText = resultado

            let resultadoMensal = resultado * 30
            pontosAcumulados = pontosAcumulados + resultadoMensal
            pontosMes.innerText = pontosAcumulados
        }
    }
}

button.addEventListener("click", calcularPontos)