// Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
}

//let a = 2
//let b = 3
//imprimirSoma(a, b);

imprimirSoma(2, 3);

//Funcao com retorno

function Somar(a, b = 2){
    return a + b;
}

console.log(Somar(2, 3)) // a = 2, b = 3
console.log(Somar(2)) // a = 2, b = 2 (b está definido na funcao)




