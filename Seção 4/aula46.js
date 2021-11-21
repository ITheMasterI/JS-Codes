//Array

const array = [7.7, 8.9, 6.3, 9.2] //0 até 3

console.log(array[0], array[3])
console.log(array[4])


array[4] = 10;
console.log(array)

console.log(array.length) // mostra a quantidade de elementos no array

array.push({id: 3}, false, null, 'teste'); //adiciona novos elementos ao array
console.log(array);


console.log(array.pop()) //remove o ultimo elemento do array
delete array[0];
console.log(array)
console.log(typeof array)








