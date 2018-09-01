var parrafo = document.getElementById("parrafo");

var arreglo = ["HTML", 15, true];
console.log(arreglo);

var objetos = {
	nombre: "HTML",
	duracion: 15,
	estado: true,
	capitulos :{
		nombre: "introducción",
		videos: 20,
	}
}

console.log(objetos);

var arrayObjetos = [{
	nombre: "HTML",
	estado : true
},{
	nombre: "css",
	estado: false
},{
	nombre: "JS",
	estado: false
}]

console.log(arrayObjetos);

for (let indice of arrayObjetos) {
	console.log(indice.nombre);
}