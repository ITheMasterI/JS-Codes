const notas = [6.6, 4.5, 2.3, 5.5, 3];

for(i in notas){
    console.log(i + ")", notas[i])
}


const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Carmona',
    idade: 21,
    peso: 80
}

for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}




