/*const cliente ={ 
    nombre : 'Juan',
    saldo : 200,
    tipoCliente : function(){
        let tipo;

        if(this.saldo > 1000){
            tipo='Gold';
        } else if(this.saldo > 500) {            
            tipo ='Platinum';
        } else { 
            tipo = 'Normal';
        }
        return tipo;
    }
}

console.log(cliente.tipoCliente());*/



/*
//manera de crear una funcion 2
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = function(){
        let tipo;

        if(this.saldo > 1000){
            tipo = 'Gold';        
        }else if(this.saldo > 500){
            tipo = 'Platinium';            
        } else {
            tipo = 'Normal';            
        }
            return tipo;
    }   

}

const persona = new Cliente('Pedro', 20000);
const persona2 = new Cliente ('Karen', 50000);
console.log(persona, persona2);*/



//otros constructores
const nombre1 = 'Diego';//String
const nombre2 = new String('Diego');//object 

console.log(nombre2);
//numeros 
const numero1 = 20;
const numero2 = new Number(20);

console.log(numero1);
console.log(numero2);










