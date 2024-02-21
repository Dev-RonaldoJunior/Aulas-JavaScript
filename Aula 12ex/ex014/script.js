function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 22
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.background = '#3c6fd5'
    }else if (hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#c55b15'
    }else {
        //BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#171d27'
    }
}