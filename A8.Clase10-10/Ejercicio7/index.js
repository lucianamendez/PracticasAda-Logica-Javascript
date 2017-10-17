/*Ejercicio 7 – Dado el siguiente array datos1 = [“Fido”,”Gomez”,26,15000.78,true] y datos2 =
[“Gervasio”,”Fernandez”,32,28.550,false]
Determinar:
• ¿Cuál de los dos personajes es más viejo?
• ¿Cuál de los dos personajes está casado?
• Si Fido recibirá un aumento equivalente al 12.5% del sueldo de Gervasio, cuanto será el
monto a cobrar?*/


var datos1 = ["Fido","Gomez",26,15000.78,true];
var datos2 = ["Gervasio","Fernandez",32,28.550,false];

var espacio=" ";
/*
if (datos1[2]>datos2[2]){
	console.log(datos1[0]+espacio+datos1[1]+" es mayor");
} else if (datos1[2]<datos2[2]){
	console.log(datos2[0]+espacio+datos2[1]+" es mayor");
}


if (datos1[4]==true){
	console.log(datos1[0]+espacio+datos1[1]+" esta casado");
} else if (datos2[4]==true){
	console.log(datos2[0]+espacio+datos2[1]+" esta casado");
}

var aumento=datos2[3]*0.125;
console.log(aumento);
var sueldoAumentado=(datos1[3]+aumento).toFixed(2);

console.log("El sueldo de "+datos1[0]+espacio+datos1[1]+" con el aumento equivale a "+sueldoAumentado);
*/

var i;
var aumento;
var sueldoAumentado;

for (i=0; i<datos1.length; i++){
	if (Number.isInteger(datos1[i]) && (Number.isInteger(datos2[i]))){
		if (datos1[i]>datos2[i]){
			console.log("Fido es mayor");
		} else {console.log("Gervasio es mayor");}
	}
	else if(typeof(datos1[i]) == "boolean" && typeof(datos2[i]) == "boolean"){
		if (datos1[i]){
			console.log("Fido esta casado")
		}
		if (datos2[i] === true){
			console.log("Gervasio esta casado")
		}
	}
	else if(typeof(datos1[i]) == "number" && typeof(datos2[i]) == "number"){
		if((Number.isInteger(datos1[i])  == false) && (Number.isInteger(datos2[i])  == false)){
			aumento=datos2[i]*0.125;
			sueldoAumentado=(datos1[i]+aumento).toFixed(2);
			console.log("El sueldo de Fido con el aumento equivale a "+sueldoAumentado);
		}
	}
}