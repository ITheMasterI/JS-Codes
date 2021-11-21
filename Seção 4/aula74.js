function tratarErro(erro){
    //throw new Error('...');

    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}



function imprimirNomeGritado(obj){
    try{

        console.log(obj.name.toUpperCase() + ' !!!');

    }catch(e){

        tratarErro(e);

    }finally{
        console.log('Fim');
    }
}

const obj = {
    nome: 'Pedro'
}


imprimirNomeGritado(obj)

