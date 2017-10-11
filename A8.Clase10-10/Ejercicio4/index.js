/*Ejercicio 4 - Dado el arreglo de números del punto 3, mostrar por pantalla el valor máximo y su
posición.
*/


x=[10,24,36,7,98,11,14,20];
var mayor=0;
var posicionMayor;

for (var i=0; i<x.length; i++){
	if (x[i]>mayor){
		mayor=x[i];	
		posicionMayor=i;

	}
}
console.log(mayor+" esta en posicion "+posicionMayor);
