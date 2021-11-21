function soma(){
    let soma = 0
    for(i in arguments){ //arguments é um array interno da função
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(2, 2))