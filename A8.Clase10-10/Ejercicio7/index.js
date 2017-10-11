console.log("version con FOR");

for (var i=1; i<=10; i++){
	console.log("9x"+i+"="+(9*i));
}


console.log("version con WHILE");

var x=1;

while(x<=10){
	console.log("9x"+x+"="+(9*x));
	x=x+1;
}

console.log("version con DO WHILE");

var y=1;

do{
	console.log("9x"+y+"="+(9*y));
	y=y+1;
}
while(y<=10);


console.log("promedio de 1 a 50");

var total=0;
for (var i=1; i<=50; i++){
	total=total+i;
	console.log("total="+total);
	console.log ("El promedio es:"+(total/i));
}
