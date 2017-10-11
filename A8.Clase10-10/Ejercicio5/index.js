/*Ejercicio 5 - Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20,98,14,10],
mostrar por pantalla el valor máximo y la cantidad de veces que se repite.
*/


x = [10,24,36,7,98,11,14,20,98,14,10];
var mayor=x[0];
var contador=0;
for (var i=0; i<x.length; i++){
	if (x[i]>mayor){
		mayor=x[i];
	} 
}

for (var i=0; i<x.length; i++){
	if (x[i]==mayor){
		contador=contador+1;
	}
}

console.log("El valor mayor es "+mayor+". Se repite "+contador+" veces.");
