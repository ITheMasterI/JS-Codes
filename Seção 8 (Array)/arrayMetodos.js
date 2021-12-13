const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)


pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)


pilotos.push('Verstappen') //adiciona elementos ao array na ultima posicao
console.log(pilotos)


pilotos.shift() //remove o primeiro elementos do array
console.log(pilotos)


pilotos.unshift('Hamilton') //adiciona elementos na primeira posicao
console.log(pilotos)


//adicionar com splice
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)


//remover com splice
pilotos.splice(0, 1)
console.log(pilotos)


const novoArray = pilotos.slice(2) //cria um novo array a partir da posicao dada
console.log(novoArray)