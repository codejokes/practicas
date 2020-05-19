//Prototipos 
function Vendedor(nombre, venta){
    this.nombre = nombre;
    this.venta = venta;    
}    


//prototipo para imprimir el saldo con el vendedor
Vendedor.prototype.nombreVendedorSaldo = function (){
    return ` El Saldo que vendio la empresa: ${this.nombre}, es de ${this.venta}`;
}

const vendedor1 = new Vendedor('Diego', 50);

console.log(vendedor1);

//herencia de prototype 
function Empresa(nombre, venta, telefono, tipo){
    Vendedor.call(this, nombre, venta);
    this.telefono = telefono;
    this.tipo = tipo;
}

Empresa.prototype = Object.create(Vendedor.prototype);

const empresa = new Empresa('Taller Mecanico Lider', 100000, 545454, 'Mantenimiento');



console.log(empresa.nombreVendedorSaldo());





//Prototypes EcmaScript 6
const Cliente = {
    imprimirSaldo: function (){
        return `Hola ${this.nombre} tu saldo es de ${this.saldo}`
    }, 
    retirarSaldo: function(retiro){
        return this.saldo -= retiro;
    }
}

const diego = Object.create(Cliente);

diego.nombre = 'Diego';
diego.saldo = 900;

diego.retirarSaldo(100);    

console.log(diego.imprimirSaldo());

