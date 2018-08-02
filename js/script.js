//variables y condicionales
var parrafo1 = document.getElementById("parrafo1");
var parrafo2 = document.getElementById("parrafo2");
var parrafo3 = document.getElementById("parrafo3");
var parrafo4 = document.getElementById("parrafo4");
var parrafo5 = document.getElementById("parrafo5");
var parrafo6 = document.getElementById("parrafo6");
var parrafo7 = document.getElementById("parrafo7");
var parrafo8 = document.getElementById("parrafo8");
var numero = parseInt(prompt("ingrese 10"));
var numero2 = parseInt(prompt("ingrese 20"));
if (numero == 10 && numero2 == 20) {
	parrafo1.innerHTML = "la suma de 10 y 20 es " + (numero + numero2);
}else{
	parrafo1.innerHTML = "no elegiste los números correctos :(";
}
//array y bucle for
var arreglo = [1,5,10,"aomine"];
for (var i = 0; i < 4; i++) {
	parrafo2.innerHTML += " " + arreglo[i];
}
for (var d in arreglo) {
	parrafo3.innerHTML += " " + arreglo[d];
}

for (var d of arreglo) {
	parrafo4.innerHTML += " " + d;
}

//while y do while
var n = 0;
while (n <= 10) {
	parrafo5.innerHTML += " " + n;
	n++; 
}
var x = 0;
do {
	parrafo6.innerHTML += " " + x;
	x++;
}while (x <= 10)

//Switch
var hora = parseInt(prompt("ingrese 10 o 15 para la hora"));

switch (hora) {
	case 10:
	parrafo7.innerHTML = "son las 10 de la mañana";
	break;
	case 15:
	parrafo7.innerHTML = "son las 15 de la tarde";
	break;
	default:
	parrafo7.innerHTML = "no tengo saludo";
	break;
}

//Funciones
function suma(num1, num2) {
	return parrafo8.innerHTML = "La suma de " + num1 + " + " + num2 + " = " + (num1 + num2);
}
var n1 = parseInt(prompt("ingrese n°1 para la suma"));
var n2 = parseInt(prompt("ingrese n°2 para la suma"));
suma(n1, n2);