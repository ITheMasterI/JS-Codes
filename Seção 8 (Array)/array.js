/* criando um array (nao recomendado)

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

*/



//ou (recomendado)
let aprovados = ['Bia', 'Carlos', 'Ana']

console.log(aprovados[0]) //Bia
console.log(aprovados[1]) //Carlos
console.log(aprovados[2]) //Ana
console.log(aprovados[3]) //undefined




//adicionando novo elemento

aprovados[3] = 'Pedro'

//ou

aprovados.push('José')
console.log(aprovados.length) //adicionado pedro e josé

aprovados[9] = 'Jonathan'
console.log(aprovados.length)
console.log(aprovados[8] === undefined) //elementos da posicao 5 a 8 existem porem nao estão definidos








console.log("")
console.log("Array Normal")

for(var i = 0; i < aprovados.length; i++){
    console.log(`i[${i}] =  ${aprovados[i]}`)
}





//Ordenando o array
console.log("")
console.log("Array Ordenado")

aprovados.sort()

for(var i = 0; i < aprovados.length; i++){
    console.log(`i[${i}] =  ${aprovados[i]}`)
}





//delete aprovados[i] -> remove o valor da posicao i deixando undefined
//aprovados.splice(indice inicial, quantidade de elementos que sera excluido, "Add elementos")

console.log("")
console.log("Teste 2")

let elementos = ['Bia', 'Ana', 'Horacio']

elementos.splice(1, 2, "Elemento 1", "Elemento 2")
console.log(elementos)