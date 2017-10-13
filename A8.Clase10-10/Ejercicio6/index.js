/*Ejercicio 6 – Dados los siguientes arreglos:
X = [“a”,”l”,”f”,”a”];
Y = [“a”,”l”,”f”,”a”,”j”,”o”,”r”]
Crear un bloque de código que permita determinar si:
• Ambos arreglos son iguales
• Cuál de los dos es más largo
• Cuantas letras tienen en común */


x = ["a","l","f","a"];
y = ["a","l","f","a","j","o","r"];

var contador=0;


if (x.length == y.length){
	console.log("Son iguales")
} else {console.log("Son arreglos distintos.")}



if (x.length>y.length){
	console.log("Arreglo x es mayor a arrleglo y")
} else {console.log("Arreglo y es mayor a arrleglo x")
}


for (var i=0; i<x.length; i++){
	
	for (var j=0; j<y.length; j++){
		console.log("Vuelta "+i+" Vuelta "+j);
		console.log(x[i]);
		console.log(y[j]);
		if (x[i]==y[j]){
			contador++;
			console.log(">>>"+x[i]+" coincide con "+y[j]);

		}
	}

}


console.log("Tienen en comun "+contador+" letras")