/*Ejercicio 1 - Cargar de forma automática incremental, un array de números a partir de un largo
dado por el usuario.*/

var n=parseInt(prompt("Ingrese largo del arreglo"));

var arreglo=[];

for (var i=0; i<n; i++){
	arreglo[i]=parseInt(prompt("Ingrese numero para indice:"+i));
}

console.log(arreglo);