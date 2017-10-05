var caminar,dinero;

caminar=confirm("Esta dispuesto a caminar? Aceptar=SI Cancelar=NO");

if (caminar==true){
	alert("SUBTE");
} else {
	dinero=confirm("prioriza tiempo por sobre dinero?");
	if(dinero==true){
		alert("Viaja en colectivo")
	} else {alert("Va en bicicleta")}
}