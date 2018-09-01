boton = document.getElementById("boton");
contenido = document.getElementById("contenido");
boton.addEventListener("click", traer);

function traer() {
    fetch("../json/tabla.json")
    .then ( res => res.json() )
    .then ( data => {
        //console.log(data)
        tabla(data)
    })
}

function tabla(data) {
    //console.log(data);
    contenido.innerHTML= "" 
    for(let valor of data) {
        //console.log(valor)
        contenido.innerHTML += 
        `<tr>
        <th> ${valor.id} </th>
        <td> ${valor.nombre} </td>
        <td> ${valor.email} </td>
        <td> ${ valor.estado ? "Activo" : "Eliminado" } </td>
        </tr>`
    }
}