'use script'

function limparClasses() {
    const caixaResultado = document.getElementById('resultado')

    caixaResultado.classList.remove('aprovado')
    caixaResultado.classList.remove('recuperacao')
    caixaResultado.classList.remove('reprovado')
}

function calcularMedia() {
    const nota1 = document.getElementById('nota1').value
    const nota2 = document.getElementById('nota2').value
    const nota3 = document.getElementById('nota3').value

    const caixaResultado = document.getElementById('resultado')

    limparClasses()

    const media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3

    if (media >= 7) {
        caixaResultado.textContent = `Média: ${media.toFixed(1)} - Aprovado`
        caixaResultado.classList.add('aprovado')
    } else if (media >= 5) {
        caixaResultado.textContent = `Média: ${media.toFixed(1)} - Recuperação`
        caixaResultado.classList.add('recuperacao')
    } else {
        caixaResultado.textContent = `Média: ${media.toFixed(1)} - Reprovado`
        caixaResultado.classList.add('reprovado')
    }
}