//calcular el factorial de N

var factorial=1;
var n=10;
for (var i=1 ; i<=n ; i++){
	factorial=factorial*i;
	console.log(factorial);
}

console.log("El factorial de "+n+" es "+factorial)



console.log("Los numeros del arreglo son")

/*var semana=[50,35,105,40,25];
var venta=0;
for (var i=0; i<(semana.length); i++){
	console.log("Posición "+i+" es "+semana[i]);
	venta=venta+semana[i];
}

console.log("La venta total de la semana es "+venta);

*/

var semana=[50,35,105,40,25];
var dia=["Lunes","Martes","Miercoles","Jueves","Viernes"]
var venta=0;
for (var i=0; i<(semana.length); i++){
	if (semana[i]>50){
	console.log("Día "+dia[i]+" es mayor a 50-->"+semana[i]);
	}
	
}

