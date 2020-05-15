const ciudades = ['Londres', 'New York ', 'Madrid', 'Paris'];
const ordenes = new Set([123, 235, 131, 101]);
const datos = new Map();
datos.set('nombre', 'juan');
datos.set('profesion', 'desarrollador web');

//console.log(ciudades);
//console.log(ordenes);
//console.log(datos);


// iteradores son de dos tipos values de tipo entries  key iteradores y default 
/*
for(let entrada of ciudades.entries()){
    console.log(entrada);
}

for (let entrada1 of ordenes.values()){
    console.log(entrada1);
}


for(let entrada2 of datos.values()){
    console.log(entrada2);
}

for (let entrada3 of ciudades.keys()){
    console.log(entrada3);
}

for (let entrada4 of datos){
    console.log(entrada4)
}
*/
const perros = new Map();
perros.set('raza', 'rotweiler');
perros.set('nombre', 'dogie')

//console.log(perros);





//iteradores para un string 

//const mensaje = 'Aprendiendo Javascript';
/*for ( let i = 0;  i < mensaje.length; i++){
    console.log(mensaje[i]);
}*/

/*for ( let letra of mensaje){
    console.log(letra)
}*/


const enlaces = document.getElementsByTagName ('a');

for (let enlace of enlaces){
    console.log(enlace.href);


}