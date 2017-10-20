var numeros=[6,5,3,1,8,7,2,4];
console.log(numeros);
var temporal;

var swap=true;
for (var n=0; n<numeros.length && swap==true; n++){
	swap=false;
	for (var i=0; i<numeros.length-1; i++){
		if (numeros[i]>numeros[i+1]){
			temporal=numeros[i];
			numeros[i]=numeros[i+1];
			numeros[i+1]=temporal;
			swap=true;
			console.log(numeros);

		}
	}
}
