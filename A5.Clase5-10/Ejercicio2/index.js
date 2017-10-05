/*Ejercicio 2 - Ana desea inscribir a su hijo Tomás a la colonia de vacaciones, para tomar la
decisión tiene en cuenta distintas variables.
A) Si la colonia queda a más de 10 km, tendrá que contratar un transporte, por lo que para
elegir esta opción el costo mensual deberá ser menor a $1500.
B) Si la colonia queda a menos de 10 km, su presupuesto total se incrementa en un 20%,
con lo cual evaluará incluir almuerzo en la colonia si este no excede el 15% del valor de
la cuota.
C) Finalmente, si la colonia está más lejos de 10km, y su costo es mayor a $1500, pero es
doble turno y le brinda almuerzo, está dispuesta a pagar hasta $2800.
*/
var distancia;
var presupuesto;
var costoMensualColonia;
var costoComida;
var dobleTurnoConComida;


if(distancia<10){ //si distancia es menor a 10km
	console.log("No necesita transporte. Presupuesto se incrementa en un 20%");
	presupuesto-=presupuesto*0.2; //presupuesto se incrementa en 20%
	if (costoComida<=costoMensualColonia*0.15){ //si agregar comida no supera el 15% de la cuota
		console.log("Incluirá comida"); 			//la agregará
	} else {console.log("No incluirá comida");} 	//sino no la agregará

} else { //si distancia es mayor a 10km
	console.log("Necesita transporte. Presupuesto se reduce en un 20%");
	presupuesto+=presupuesto*0.2; //presupuesto se reduce en 20%
	if (costoMensualColonia<=2800 && dobleTurnoConComida){ //hasta $2800  SI INCLUYE con doble turno y comida
		console.log("Esta dispuesta a considerarla")		
	} else if (costoMensualColonia<1500){ 					// si sale menos de $1500 
		console.log("Esta dispuesta a considerarla")
	}
}
