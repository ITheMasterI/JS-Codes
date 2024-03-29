//Higher-order function

//forma literal
function fun1(){}

//armazenar em uma variável
const fun2 = function(){}

//armazenar em um array
const array = [function(a, b) {

    return a + b;
}]//, fun1, fun2]

console.log(array[0](2, 3))


// Armazenar em um atributo de objeto
const obj = {}

obj.falar = function(){
    return 'Opa';
}

console.log(obj.falar());

// Passar função como parametro
function run(fun){
    fun()
}

run(function(){
    console.log('Executando...')
})


//Uma função pode retornar/conter uma função

function soma(a, b){
    return function(c){
        console.log(a + b + c);
    }
}

soma(2, 3)(4) //soma(a, b)(c)


function subtracao(a, b){
    return function(c){
        return function(d){
            console.log(a - b + c - d)
        }
    }
}

subtracao(10, 5)(15)(10)