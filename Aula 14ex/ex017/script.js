function gerar() {
    var num = Number(document.getElementById('num').value)
    var c = 0
    var divr = document.getElementById('res')
    divr.innerHTML = ''
    while (c <= 10) {
        var resp = num * c
        divr.innerText += ` ${num} x ${c} = ${resp}`
        c += 1
    }
}