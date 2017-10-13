/*Ejercicio 3 - Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20], mostrar por
pantalla el valor máximo*/


x=[10,24,36,7,98,11,14,100];
var mayor;

for (var i=0; i<x.length-1; i++){
	if (x[i]>x[i+1]){
		mayor=x[i];
	} else {
		mayor=x[i+1];
}
}

console.log(mayor);