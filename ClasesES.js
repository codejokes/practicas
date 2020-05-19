class Cliente {
    constructor(nombre, apellido, saldo){
        this.nombre = nombre;
        
        this.saldo = saldo;
    }

    imprimirSaldo(){
        return `Hola ${this.nombre},  tu saldo en Gigas es de: ${this.saldo}`;
    }

    calcularSaldo(){
        let gb;
        gb = this.saldo * 0.000977;
        return gb;
    }

    saldoConsumo(retiro){
        return this.saldo -= retiro;
    }

    static bienvenida(){
        return `Bienvenido a Consumos`;
    }
}

const diego = new Cliente('Diego', 'Urdanigo', '1024');

diego.saldoConsumo(200);


//Metodo estatico sin necesidad de crear una nueva instancia
console.log(Cliente.bienvenida());


console.log(diego.imprimirSaldo());




class Vehiculo{
    constructor(modelo, precio){
        this.modelo = modelo;
        this.precio = precio;

    }

    imprimirPrecio(){
        return `Hola Tu carro es un ${this.modelo}, el precio de tu auto es de ${this.precio}`;
    }

    static Comoanda(){
        return `Como anda Señor saludos de la rede de precios estatales`;
    }



}

console.log(Vehiculo.Comoanda());
const vehiculo = new Vehiculo('Camaro', 1000);
console.log(vehiculo.imprimirPrecio());

class Empresa extends Vehiculo{
    constructor(modelo, precio, telefono, tipo){
        //Contructor parents
        super(modelo, precio);
        this.telefono = telefono ;
        this.tipo = tipo ;
    }
}





                     