'use script'

const botaoAvaliar = document.getElementById('avaliar')

function limparClasses() {
    const caixaResultado = document.getElementById('resultado')
    caixaResultado.classList.remove('apto')
    caixaResultado.classList.remove('nao-apto')
}

function avaliarTempo() {
    const tempo = document.getElementById('tempo-digitado').value
    const caixaResultado = document.getElementById('resultado')
    
    limparClasses()

    if (tempo < 14) {
        caixaResultado.textContent = 'Apto'
        caixaResultado.classList.add('apto')
    } else {
        caixaResultado.textContent = 'Não apto'
        caixaResultado.classList.add('nao-apto')
    }
}

botaoAvaliar.onclick = avaliarTempo