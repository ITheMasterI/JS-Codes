let dobro
/*
dobro = function(a){
return 5 * a
}

console.log(dobro(10))
*/

//Arrow

dobro = (a) => {
    return 2 * a
}

console.log(dobro(Math.PI))

/*
                        OU

dobro = a => 2 * a
console.log(dobro(Math.PI))

*/



//Arrow com objeto

function Pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa