const peso1 = 1.0; //number tipo do dado
const peso2 = Number('2.1'); // Number é uma funcao

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));


const avaliacao1 = 9.871;
const avaliacao2 = 8.970;

const total = (avaliacao1 * peso1) + (avaliacao2 * peso2);
const media = total / (peso1 + peso2);


console.log(media.toFixed(3)); //toFixed() reduz a quantidade de casas decimais
console.log(media.toString(2)); //transforma em binario
console.log(typeof media);
console.log(typeof Number);
