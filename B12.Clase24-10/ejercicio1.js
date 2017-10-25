/*Ejercicio 1: Escribir una función que dado un número X (base) y un número N (potencia),
devuelva el resultado de realizar X a la N
*/
var numero=0;

function potencia(base,exponente){

	var resultado=1;
	for (var i=0; i<exponente; i++){
		resultado=resultado*base;
	}
	return resultado;
}


var potenciaResultado=potencia(10.25,4);

console.log(potenciaResultado);