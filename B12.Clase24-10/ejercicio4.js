/*Ejercicio 4: Escribir una función que dado un arreglo con los siguientes datos:
Corredor = { “Nombre”,”Apellido”,edad,”genero” } retorne la categoría a la cual estará anotado
por ejemplo:
F 18 – 25, M 18 – 25
*/
var nombre, apellido, edad, genero;
var corredor = {nombre:"Fido", apellido:"Perez", edad:30, genero:"Masculino"};


function categoria (corredor){
	if (corredor.edad>18 && corredor.edad<=25){
		if(corredor.genero=="Masculino"){
			return "M 18-25"
		}
		else{ 
			return "F 18-25"
		}
	}
	else if (corredor.edad>25 && corredor.edad<=35){
		if(corredor.genero=="Masculino"){
			return "M 26-35"
		}
		else{
			return "F 26-35"
		}
	}
}

var resultadoCategoria = categoria(corredor);
console.log(resultadoCategoria);
