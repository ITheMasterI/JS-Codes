const obj1 = {};
obj1.nome = 'Bola';
//objt1['nome'] = 'Bola';

console.log(obj1.nome)

function Obj(nome){
    this.nome = nome;
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)





function Objeto(tamanho){
    this.tamanho = tamanho;
}

const obj4 = new Objeto(2.40)
const obj5 = new Objeto(1.35)
console.log(obj4.tamanho)
console.log(obj5.tamanho)