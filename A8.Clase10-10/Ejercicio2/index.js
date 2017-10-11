/*Ejercicio 2 - Repetir el ejercicio anterior, ubicando 0 (ceros), en las posiciones pares y un valor
que coincida con el índice en las posiciones impares.*/


var n=parseInt(prompt("Ingrese largo del arreglo"));

var arreglo=[];

for (var i=0; i<n; i++){
	if(i%2==0){
		arreglo[i]=0;
	}
	else {arreglo[i]=i;}
}

console.log(arreglo);