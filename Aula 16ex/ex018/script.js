let array = []
let adc = document.getElementById('numero')
let quad = document.getElementById('quadro')
let resp = document.getElementById('resposta')
let finalizado = 0

function adicionar() {
    if (finalizado == 1) {
        finalizado = 0
        quad.innerText = ''
        resp.innerHTML = ''
    }
    if (adc.value.length == 0) {
        window.alert('[ERRO] Você precisa adicionar um numero!')
    } else {
        let num = Number(adc.value)
        if (num < 1 ||  num > 100 ) {
           window.alert('o valor deve ser entre 1 e 100')
        } else {
            let item = document.createElement('option')
            let existe = false
            for (let d = 0; d < array.length; d++) {
                if (array[d] === num) {
                    existe = true
                    break
                }
            }
            if (existe) {
                window.alert(`O numero ${num} ja existe na lista`)
                adc.value = ''
            } else {
                array.push(num)
                item.text = `numero ${num} adicionado`
                item.value = `quad${quad.children.length}`
                quad.appendChild(item)
                adc.value = ''
            }
        }
    }
}

function finalizar() {
    let tamanho = array.length
    let soma = 0
    if (tamanho == 0) {
        window.alert('[ERRO] sua lista esta vazia, adicione algum valor a ela antes de finalizar!')
    } else {
        for (let c = 0; c < tamanho; c++) {
            soma += array[c]
        }
        let med = soma / tamanho
        let media = med.toFixed(2)
        array.sort(function(a, b) {
            return a - b;
        })
        resp.innerHTML = `Ao todo, temos ${tamanho} numeros cadastrados <br> O maior valor informado foi ${array[tamanho - 1]} <br> O menor valor informado foi ${array[0]} <br> Somando todos os valores, temos o numero ${soma} <br> A media dos valores digitados é ${media}`
        finalizado = 1
        array = []
    }
}