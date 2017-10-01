//7- Que calcule el sueldo que le corresponde al trabajador de una empresa que cobra
//40.000 euros anuales, se deben realizar los cálculos en función de los siguientes
//criterios:
//a. Si lleva más de 10 años en la empresa se le aplica un aumento del 10%.
//b. Si lleva menos de 10 años pero más que 5 se le aplica un aumento del 7%.
//c. Si lleva menos de 5 años pero más que 3 se le aplica un aumento del 5%.
//d. Si lleva menos de 3 años se le aplica un aumento del 3%

var sueldo=40000
var anios=parseInt(prompt("Años trabajados?"));

if (anios<3){
	aumento=(sueldo*3)/100;
} else if(anios>=3 && anios<5){
	aumento=(sueldo*5)/100;
} else if (anios>=5 && anios<10){
	aumento=(sueldo*7)/100;
} else{
	aumento=(sueldo*100)/100;
}

alert("Sueldo=$"+(sueldo+aumento));

