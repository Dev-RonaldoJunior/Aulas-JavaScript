function gerar() {
    var num = document.getElementById('num')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('[ERRO] Insira um numero!')
    } else {
        var n = Number(num.value)
        var c = 0
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //Usa em PHP
            tab.appendChild(item)
            c++
        }
    }
}