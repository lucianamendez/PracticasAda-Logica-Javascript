/*Ejercicio 2: Escribir una función que, dado un número pasado como parámetro, determine si es primo.
*/


function primo(numero){
	if (numero==1){
		return false;
	}
	else if (numero==2){
		return true;
	}
	else{
		for (var i=2; i<numero; i++){
				if (numero%i==0){
					return false;
			}
		}
		return true;
	}
}

console.log(primo(7));

