var saludoId = document.getElementById("saludo");
var sumarId= document.getElementById("sumar");
var saludar = nombre => {return "Hola " + nombre};
saludoId.innerHTML += saludar("Omar");
var sumar = (numero1, numero2) => {return numero1 + numero2};
sumarId.innerHTML += sumar(15, 30); 
