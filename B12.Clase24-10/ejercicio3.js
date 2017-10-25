/*Ejercicio 3: Escribir una función que dada una palabra pasada por parámetro determine si es
aguda, grave o esdrújula.

agudas se acentuan en la ultima silaba
graves se acentuan en la penultima silaba
esdrujulas se acentuan en la antepenultima silaba
*/

//var palabra="papá";
//var palabra="árbol";
var palabra="esdrújula";

var acentos=["á","é","í","ó","ú"];

function queEs(palabra,acentos){

	for(var i=palabra.length-1; i>=0; i--){
		for(var j=0; j<acentos.length;j++){
			if (palabra[i]==acentos[j]){
				if (i>=palabra.length-2){ //6-2=4 mayor o igual a posicion 4(ultimos dos)
					return "aguda"
				}
				else if (i<palabra.length-2){//todos excepto los ultimos 2
					if(palabra.length<=5){ //si tiene hasta 5 letras
					return "grave"
					} else {
						return "esdrújula" //si tiene mas de 5 letras
					}			
				}
			}
		}
	}
}

var respuesta=queEs(palabra,acentos);
console.log(`La palabra ${palabra} es ${respuesta}`);