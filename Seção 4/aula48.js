const a = {name: "Pedro"}
console.log(a);

const b = a;
b.name = "opa";
console.log(b, a);

//Valor de a passou a ser igual de b pois substitui no endereço da memória


let valor1 = 3;
console.log(valor1);

let valor2 = valor1;
valor2 = 10;
console.log(valor2, valor1);

//O valor da primeira variavel nao foi alterada pois é um tipo primitivo



console.log()

//Null e Undefined

let valor; //valor nao inicializado
console.log(valor);

valor = null //ausencia de valor, remove o valor do endereco de memoria
console.log(valor)



const produto = {};
console.log(produto.preco);
console.log(produto)





console.log()

produto.preco = 3.50;
console.log(produto) // mostra tudo que esta dentro da variavel produto





console.log()

produto.preco = undefined
console.log(!!produto.preco)
console.log(produto)




console.log()

produto.preco = null;
console.log(!!produto.preco)
console.log(produto)