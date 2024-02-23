let num = [2,5,8,4,1,7,9,6,3,0]
// console.log(num)
// for (let pos = 0; pos < num.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${num[pos]}`)
// }
// console.log('')
// num.sort()

// console.log(num)
// for (let pos = 0; pos < num.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${num[pos]}`)
// }

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}