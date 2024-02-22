function contar() {
    var ini = Number(document.getElementById('ini').value)
    var fim = Number(document.getElementById('fim').value)
    var pas = Number(document.getElementById('pas').value)
    var res = document.getElementById('res')
    res.innerText = ''
    if (pas <= 0) {
        res.innerText = 'Passo inválido! Digite um valor maior que zero para o passo.'
        return
    }
    if (ini < fim) {
        for (var c = ini; c <= fim; c += pas) {
            res.innerText += '\u{1F449}'
            if (c <= fim) {
                res.innerText += `${c}`
            }
        }
    } else {
        for (var c = ini; c >= fim; c -= pas) {
            res.innerText += '\u{1F449}'
            if (c >= fim) {
                res.innerText += `${c}`
            }    
        }
    }
}