const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){ //recebe um nome, indice e array
    console.log(`${indice + 1}) ${nome}`)
})

console.log("")

aprovados.forEach(nome => console.log(nome))