let numero = 1;

{
    let numero = 2;
    console.log('dentro =', numero);
}

console.log('fora =', numero);

//o valor não alterou pois estão em escopos diferentes
//tem escopo global, funcao e bloco