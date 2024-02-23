let array = []
let adc = document.getElementById('numero')
let quad = document.getElementById('quadro')
let resp = document.getElementById('resposta')

function adicionar() {
    if (adc.value.length == 0) {
        window.alert('[ERRO] Você precisa adicionar um numero!')
    } else {
        let num = Number(adc.value)
        let c = 0
        let item = document.createElement('option')
        item.text = `numero ${num} adicionado`
        item.value = `quad${c}`
        quad.appendChild(item)
        c++
        array.push(num)
    }
}

function finalizar() {
    let tamanho = array.length
    let soma = 0
    for (let c = 0; c < tamanho; c++) {
        soma += array[c]
    }
    let med = soma / tamanho
    let media = med.toFixed(2)
    array.sort()
    resp.innerHTML = `Ao todo, temos ${tamanho} numeros cadastrados <br> O maior valor informado foi ${array[tamanho - 1]} <br> O menor valor informado foi ${array[0]} <br> Somando todos os valores, temos o numero ${soma} <br> A media dos valores digitados é ${media}`

}