/*Ejercicio 3 – Dados distintas tarjetas de crédito, mostrar por consola la cantidad de cuotas sin
interés según el siguiente criterio.
- Mastercard – hasta 6 cuotas s/interés
- Visa – hasta 9 cuotas s/interés
- Amex – hasta 3 cuotas sin interés
- Todas las demás - 1 cuota sin interés
*/

var tarjeta;

switch(tarjeta){
	case "Mastercard":
		console.log("Hasta 6 cuotas sin interés.");
		break;
	case "Visa":
		console.log("Hasta 9 cuotas sin interés.");
		break;
	case "Amex":
		console.log("Hasta 3 cuotas sin interés.");
		break;
	default:
		console.log("Hasta 1 cuota sin interés.");
		break;

}