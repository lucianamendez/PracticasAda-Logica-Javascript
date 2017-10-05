//Dados tres números, x y z, si x es mayor que y ,calcular la resta entre x y z, y determinar
//si eso es mayor que y, de lo contrario sumar x y z (x+z) y multiplicarlo por y.

var x=parseInt(prompt("X: Ingrese un numero"));
var y=parseInt(prompt("Y: Ingrese un numero"));
var z=parseInt(prompt("Z: Ingrese un numero"));
var resta=0;
var resultado=0;

if (x>y){ //si x es mayor a Y
	resta=(x-z)
		if (resta>y){alert("("+x+"-"+z+")>"+y+"?  Es mayor que Y")} //determina si es mayor a Y
			else {alert("("+x+"-"+z+")>"+y+"?  No es mayor que Y")}
} else { //si y es mayor a x
	resultado=(x+z)*y;
	alert("("+x+"+"+z+")*"+y+" es igual a "+resultado)
}