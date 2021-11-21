//String


const escola = "Cod3r";

console.log(escola.charAt(3)); 
console.log(escola.charCodeAt(4));
console.log(escola.indexOf('r'));
console.log(escola.substring(1)); // comecou no indice 1
console.log(escola.substring(0, 3)); // comeca no indice 0 e vai ate o 2
console.log("Escola ".concat(escola).concat("!"));
console.log(escola.replace(3, 'e'));
console.log('Ana, Pedro, Batata'.split(','));



/*

charAt(posicao) -> retorna a letra/numero que está em determinada posicao
chatCodeAt(posicao) -> retorna o valor da letra/numero na tabela ASC
indexOf() -> retorna a posicao da letra/numero
substring() -> retorna a string a partir de determinada posicao
concat() -> concatena strings
replace(parametro1, parametro2) -> substitui o parametro1 pelo parametro2
split() ->  gera um array
*/

