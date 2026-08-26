'use script'

const botaoCalcular = document.getElementById('calcular')

function limparClasses() {
    const caixaResultado = document.getElementById('resultado')
    caixaResultado.classList.remove('ate-5')
    caixaResultado.classList.remove('entre-5-10')
    caixaResultado.classList.remove('maior-10')
}

function avaliarDesconto() {
    const preco = document.getElementById('preco-original').value
    const desconto = document.getElementById('porcentagem-desconto').value
    const caixaResultado = document.getElementById('resultado')

    limparClasses()

    let valorDesconto = preco * (desconto / 100)
    let precoFinal = preco - valorDesconto

    if (desconto <= 5) {
        caixaResultado.textContent = `Desconto em dinheiro: R$ ${valorDesconto.toFixed(2)} | Preço final: R$ ${precoFinal.toFixed(2)}`
        caixaResultado.classList.add('ate-5')
    } else if (desconto <= 10) {
        caixaResultado.textContent = `Desconto em dinheiro: R$ ${valorDesconto.toFixed(2)} | Preço final: R$ ${precoFinal.toFixed(2)}`
        caixaResultado.classList.add('entre-5-10')
    } else {
        caixaResultado.textContent = `Desconto em dinheiro: R$ ${valorDesconto.toFixed(2)} | Preço final: R$ ${precoFinal.toFixed(2)}`
        caixaResultado.classList.add('maior-10')
    }
}

botaoCalcular.onclick = avaliarDesconto
