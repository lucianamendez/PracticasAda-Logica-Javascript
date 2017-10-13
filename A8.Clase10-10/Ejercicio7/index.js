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
