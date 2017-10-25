palabra1=["a","l","f","a","j","o","r"];

palabra2=["a","l","f","a"];
var coincidencias;

function buscarCoincidencias(palabra1,palabra2){
for (var j=0; j<palabra2; j++){
	for (var i=0; i<palabra1; i++){
		if (palabra1[j]==palabra2[i]){
			coincidencias++;
		}
	}
}
	return coincidencias
}

console.log(buscarCoincidencias(palabra1,palabra2));