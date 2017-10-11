/*Ejercicio 3 - Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20], mostrar por
pantalla el valor máximo*/


x=[10,24,36,7,98,11,14,20];
var mayor;

for (var i=0; i<x.length; i++){
	if (x[i]>x[i+1]){
		mayor=x[i];
	}
}

console.log(mayor);