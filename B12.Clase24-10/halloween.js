var disfraces=["Bulbasaur","Squirtle","Charmander"];
var sorteados= new Array;

var repetido;

/*
function randomHalloween(disfraces){
	var posicion= Math.floor((Math.random()*(disfraces.length)));
	return disfraces[posicion];
}
console.log(randomHalloween(disfraces));
*/


function randomHalloween(disfraces){
	var posicion= Math.floor((Math.random()*(disfraces.length)));
	sorteados[0]=disfraces[posicion];
	for (var i=1; i<disfraces.length; i++) {
		do {
		posicion= Math.floor((Math.random()*(disfraces.length)));
			sorteados[i]=disfraces[posicion];
		for(var j=0; j<sorteados.length;j++){
				if (sorteados[i]!=sorteados[j]){
					repetido=false;
						}
					}
				}			
		while(repetido==true)				
			
		}
	return sorteados;
	}
var resultado=randomHalloween(disfraces)
console.log(resultado);