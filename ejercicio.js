//Prototipos 
function Vendedor(nombre, venta){
    this.nombre = nombre;
    this.venta = venta;    
}    
    
//prototipo para sacar tipo de vendedor
Vendedor.prototype.tipoVendedor = function(){
        let tipo;
        if(this.venta > 1000){
            tipo = 'ACCESS';
        }else if(this.venta > 500){
            tipo = 'VIP';
        }else{
            tipo = 'Cajero';
        }
        return tipo;
}
    
//prototipo para imprimir el saldo con el vendedor
Vendedor.prototype.nombreVendedorSaldo = function (){
    return ` El Saldo que vendio el Señor: ${this.nombre}, es de ${this.venta}, lo posiciona entre los Vendedores de tipo  ${this.tipoVendedor()}`;
}


//retirar premio
Vendedor.prototype.retirarPremio = function(premio){
    return this.venta -= premio;

}
    
    const vendedor1 = new Vendedor('Diego', 50);
    const vendedor2 = new Vendedor('Juan', 540);
    const vendedor3 = new Vendedor('Pedro', 5000);

    vendedor2.retirarPremio(450);
    console.log(vendedor1.nombreVendedorSaldo());
    console.log(vendedor2.nombreVendedorSaldo());
    console.log(vendedor3.nombreVendedorSaldo());
    /*console.log(vendedor1.tipoVendedor()); 
    console.log(vendedor2); 
    console.log(vendedor3); */