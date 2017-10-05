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

/*

var x=prompt("ingrese una letra");
switch(x){
	case "a":
		case "A":
			alert("Es una vocal"); 
			break;
	case "e":
		case "E":
			alert("Es una vocal"); 
			break;
	case "i":
		case "I":
			alert("Es una vocal"); 
			break;
	case "o":
		case "O":
			alert("Es una vocal");
			break;
	case "u":
		case "U":
			alert("Es una vocal"); 
			break;
	default: 
		alert("No es una vocal");
		break;

}*/