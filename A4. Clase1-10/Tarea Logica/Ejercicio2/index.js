//2- Dada una variable y que puede contener un número de 1 a 7, determinar a que día de
//la semana corresponde. Incluir la opción si la variable toma un valor no válido (por
//ejemplo 0 u 8).

var x=parseInt(prompt("Ingrese un número de 1 a 7."));


switch(x){
case 1:
    alert(x+" corresponde a dia LUNES");
    break;
case 2:
    alert(x+" corresponde a dia MARTES");
    break;
case 3:
    alert(x+" corresponde a dia MIERCOLES");
    break;
case 4:
    alert(x+" corresponde a dia JUEVES");
    break;
case 5:
    alert(x+" corresponde a dia VIERNES");
    break;
case 6:
    alert(x+" corresponde a dia SABADO");
    break;
case 7:
    alert(x+" corresponde a dia DOMINGO");
    break;
default:
    alert(x+" corresponde a VALOR NO VALIDO");
    break;
}

