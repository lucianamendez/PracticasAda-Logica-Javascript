var nombre="Nemo";//var global
var nombres=["Lala","Po","Dipsy","Nemo"];
/*
function buscandoNemo (nombre,nombres){

	for(var i=0; i<nombres.length; i++){
		if(nombre==nombres[i]){
			return true;
		}
	}
	return false;
}
*/	


function buscandoNemo (nombre,nombres){
var encontrado=false;
	for(var i=0; i<nombres.length && encontrado==false; i++){
		if(nombre==nombres[i]){
			encontrado=true;
		}
	}
	return encontrado;
}


if (buscandoNemo(nombre,nombres)==true){
	console.log("Encontramos a Nemo");
}

