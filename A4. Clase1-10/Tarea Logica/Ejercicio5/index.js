//5- Dada una variable que puede ser una letra, determinar si es una vocal.

var x=prompt("ingrese una letra");
var vocales=["a","e","i","o","u"]


for (var i=0; i<=vocales.length; i++){
	if (x==vocales[i]){
		alert(x+" es una vocal.");
		break;
		} else { alert(x+" no es una vocal.");
		break;}	
	}

