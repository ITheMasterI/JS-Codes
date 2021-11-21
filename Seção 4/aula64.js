//Destructuring

const pessoa = {
    nome: 'Pedro',
    idade: 21,
    endereco: {
        logradouro: 'Rua do manifesto',
        numero: 460
    }
}


const { nome, idade } = pessoa 
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i);

const { sobrenome, humor = true} = pessoa
console.log(sobrenome, humor)

//const { conta: { agencia, contaCorrente }} = pessoa
//console.log(agencia, contaCorrente)


//-------------------------------------------------------------------
console.log("");
console.log("Aula 65");

const [a] = [10]
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

//-------------------------------------------------------------------
console.log("");
console.log("Aula 66");


function rand({min = 0, max = 1000}){

    const valor = Math.random() * (max - min) - min;
    return Math.floor(valor);
}

const obj = { max: 50, min: 40};

console.log(rand(obj));
