console.log("Aula 1")
console.log("")

const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao);
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcionar e OO

const falarDePessoa = pessoa.falar.bind(pessoa) //bind passa um objeto que queira que o this seja resolvido
falarDePessoa()

//------------------------------------------------------------------------------

console.log("")
console.log("Aula 2")
console.log("")

//Método 1

function Pessoa(){
    this.idade = 0;

    setInterval(function(){ //dispara a funcao em um determinado intervalo
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoa





/* Método 2

function Pessoa(){
    this.idade = 0;

    const self = this
    setInterval(function(){ //dispara a funcao em um determinado intervalo
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa


*/

