/*Ejercicio 1 – Un sistema de fidelización de usuarios implementa la siguiente regla para la
adquisición de productos del catálogo. Se pide determinar la lógica de canje.
- El producto X que se desea canjear tiene un valor determinado en cantidad de puntos.
- Si el cliente que lo quiere canjear tiene la cantidad de puntos requerida realiza
directamente el canje.
- Si el cliente tiene el 50% de los puntos requeridos, podrá completar el canje con dinero,
en ese caso cada peso equivaldrá a 3 puntos.
- Si el cliente tiene el 50% de los puntos requeridos, pero a su vez tiene categoría
premium, la relación pesos puntos será 1 a 5.

*/

var puntos=parseInt(prompt("Ingrese cantidad de puntos"));
var premium=confirm("Es categoria premium?");

producto=1000

if (puntos>=producto){
	alert("Los puntos alcanzan para ser canjeados")
} else if (puntos>=(producto*0.5) && premium==false){
	alert ("Puede canjear el producto completando con dinero. Falta abonar $"+Math.trunc((producto-puntos)/3))
} else if (puntos>=(producto*0.5) && premium==true){
	alert ("Puede canjear el producto completando con dinero. Falta abonar $"+Math.trunc((producto-puntos)/5))
} else {
	alert("No alcanzan los puntos")
}

