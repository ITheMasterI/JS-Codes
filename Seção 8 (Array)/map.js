const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)

//funcao 1
const soma10 = e => e + 10

//funcao 2
const triplo = e => e * 3

//funcao 3
const paraDinheiro = e => `Rs ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)


console.log("");

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',

]