//3- Dada una variable donde se ingresa el nombre del mes, devolver la cantidad de días
//correspondiente

var x=prompt("Escriba el nombre del mes en minuscula");

var dias31=" tiene 31 días";
var dias30=" tiene 30 días";
var dias28=" tiene 28 dias";

switch(x){
case "enero":
    alert(x+dias31);
    break;
case "febrero":
    alert(x+dias28);
    break;
case "marzo":
    alert(x+dias31);
    break;
case "abril":
    alert(x+dias30);
    break;
case "mayo":
    alert(x+dias31);
    break;
case "junio":
    alert(x+dias30);
    break;
case "julio":
    alert(x+dias31);
    break;
case "agosto":
    alert(x+dias31);
    break;
case "septiembre":
    alert(x+dias30);
    break;
case "octubre":
    alert(x+dias31);
    break;
case "noviembre":
    alert(x+dias30);
    break;
case "diciembre":
    alert(x+dias31);
    break;
default:
    alert("MES NO VALIDO");
    break;
}

