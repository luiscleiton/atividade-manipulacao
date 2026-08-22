'use script'

const botaoCalcular = document.getElementById('calcular')

function avaliarDesconto() {
    const preco = document.getElementById('preco-original').value
    const desconto = document.getElementById('porcentagem-desconto').value
    const caixaResultado = document.getElementById('resultado')

    let valorDesconto = preco * (desconto / 100);
    let precoFinal = preco - valorDesconto;

    if (desconto < 5) {
        caixaResultado.textContent = `Desconto em dinheiro: R$ ${valorDesconto.toFixed(2)}\nPreço final: R$ ${precoFinal.toFixed(2)}`;
        caixaResultado.classList.add('ate-5');
    } else if (desconto = 5 && desconto <= 10) {
        caixaResultado.textContent = `Desconto em dinheiro: R$ ${valorDesconto.toFixed(2)}\nPreço final: R$ ${precoFinal.toFixed(2)}`;
        caixaResultado.classList.add('entre-5-10')
    } else {
        caixaResultado.textContent = `Desconto em dinheiro: R$ ${valorDesconto.toFixed(2)}\nPreço final: R$ ${precoFinal.toFixed(2)}`;
        caixaResultado.classList.add('maior-10')
    } 
}

botaoCalcular.onclick = avaliarDesconto