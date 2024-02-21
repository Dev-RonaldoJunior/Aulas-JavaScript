var agora = new Date()
var dia = agora.getDay()
var hora = agora.getHours()
var min = agora.getMinutes()
var date = agora.getDate()
var mes = agora.getMonth()
var ano = agora.getFullYear()

switch(dia) {
    case 0:
        dia= 'Domingo'
        break

    case 1:
        dia= 'Segunda-Feira'
        break

    case 2:
        dia= 'Terça-Feira'
        break

    case 3:
        dia= 'Quarta-Feira'
        break

    case 4:
        dia= 'Quinta-Feira'
        break

    case 5:
        dia= 'Sexta-Feira'
        break

    case 6:
        dia= 'Sabado'
        break

    default:
        dia= '[ERRO] Dia Invalido!'
        break
}

 switch(mes) {
    case 0:
        var mes2 = 'Janeiro'
        break
    case 1:
        var mes2 = 'Fevereiro'
        break
    case 2:
        var mes2 = 'Março'
        break
    case 3:
        var mes2 = 'Abril'
        break
    case 4:
        var mes2 = 'Maio'
        break
    case 5:
        var mes2 = 'Junho'
        break
    case 6:
        var mes2 = 'Julho'
        break
    case 7:
        var mes2 = 'Agosto'
        break
    case 8:
        var mes2 = 'Setembro'
        break
    case 9:
        var mes2 = 'Outubro'
        break
    case 10:
        var mes2 = 'Novembro'
        break
    case 11:
        var mes2 = 'Dezembro'
        break
    default:
        var mes2 = '[ERRO] mês invalido!'
        break
}

console.log (`Hoje é dia ${date}/${mes+1}/${ano} uma ${dia} do mês ${mes2} as ${hora}:${min}`)

if (hora < 6) {
    console.log('Uma excelente madrugada para você!')
}else if (hora < 12) {
    console.log('Um excelente dia para você!')
}else if (hora < 18) {
    console.log('Uma excelente tarde para você!')
}else{
    console.log('Uma excelente noite para você!')
}