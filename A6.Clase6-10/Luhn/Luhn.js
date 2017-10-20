//algoritmo de luhn


//var tarjeta=prompt("Ingrese el numero de su tarjeta de credito(14 digitos)")

var tarjeta="36093580156761";
console.log(tarjeta);

var esSegundoDigito=false;
var total=0;

for (var i=tarjeta.length-1; i>=0; i--){
	var x = parseInt(tarjeta.charAt(i));

	if(esSegundoDigito){
		//esSegundoDigito=true
		x = x*2;
		if (x>9){
			x-=9;}
		}
	else {
		//esSegundoDigito=false
		}
	
	esSegundoDigito=!esSegundoDigito;
}
	//operador TERNARIO
	alert(total % 10 === 0 ? "bien ahi" : "mala");

/*
if (total % 10 == 0){
	alert ("bien ahi")
} else {"mala"}

*/


