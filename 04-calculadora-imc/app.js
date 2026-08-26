'use script'

function limparClasses() {
    const caixaResultado = document.getElementById('resultado')

    caixaResultado.classList.remove('abaixo-peso')
    caixaResultado.classList.remove('peso-normal')
    caixaResultado.classList.remove('sobrepeso')
    caixaResultado.classList.remove('obesidade-grau-1')
    caixaResultado.classList.remove('obesidade-grau-2')
    caixaResultado.classList.remove('obesidade-grau-3')
}

function calcularIMC() {
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value

    const caixaResultado = document.getElementById('resultado')

    limparClasses()

    const imc = peso / (altura * altura)

    if (imc < 18.5) {
        caixaResultado.textContent = `${nome}, seu IMC é ${imc.toFixed(1)} - Abaixo do peso`
        caixaResultado.classList.add('abaixo-peso')
    } else if (imc < 25) {
        caixaResultado.textContent = `${nome}, seu IMC é ${imc.toFixed(1)} - Peso normal`
        caixaResultado.classList.add('peso-normal')
    } else if (imc < 30) {
        caixaResultado.textContent = `${nome}, seu IMC é ${imc.toFixed(1)} - Sobrepeso`
        caixaResultado.classList.add('sobrepeso')
    } else if (imc < 35) {
        caixaResultado.textContent = `${nome}, seu IMC é ${imc.toFixed(1)} - Obesidade grau I`
        caixaResultado.classList.add('obesidade-grau-1')
    } else if (imc < 40) {
        caixaResultado.textContent = `${nome}, seu IMC é ${imc.toFixed(1)} - Obesidade grau II`
        caixaResultado.classList.add('obesidade-grau-2')
    } else {
        caixaResultado.textContent = `${nome}, seu IMC é ${imc.toFixed(1)} - Obesidade grau III`
        caixaResultado.classList.add('obesidade-grau-3')
    }
}
