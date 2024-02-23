let num = [5, 6, 7, 9, 0, 1, 5, 0]
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
num[4] = 0
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
num[1] = 0
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
num.push(8)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)

let pos = num.indexOf(7)
console.log(`O valor 7 esta na posição ${pos}`)

let pos2 = num.indexOf(10)
console.log(`o Valor 10 esta na posição ${pos2} e menos um significa que não existe dentro do array (vetor ou variavel composta)`)


let posteste = num.indexOf(10)
if (posteste == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor esta na posição ${posteste}`)
}