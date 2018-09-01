const pelicula1 = {
    nombre: "Harry",
    id: 1,
    reproducir() {
        return `reproduciendo pelicula... ${this.nombre}`;
    }
};

console.log(pelicula1.reproducir());

const pelicula2 = {
    nombre: "Araña",
    id: 2,
    reproducir() {
        return `reproduciendo pelicula... ${this.nombre}`;
    }
};

console.log(pelicula2.reproducir());

class Pelicula {
    constructor(nombre, id) {
        this.nombre = nombre,
        this.id = id;
    }
    reproducir2() {
        return `reproduciendo pelicula... ${this.nombre}`;
    }
}   

class Serie extends Pelicula{
    constructor(nombre, id, cap){
        super(nombre, id);
        this.cap = cap;
    }
    reproducirCapitulo(){
        return `reproduciendo cap... ${this.cap} Serie... ${this.nombre}`;
    }
}

const PeliculaUno = new Pelicula("Cars", 3);
const PeliculaDos = new Pelicula("Fabrica", 4);

console.log(PeliculaUno.reproducir2());
console.log(PeliculaDos.reproducir2());

const SerieUno = new Serie("Dexter", 1, 12);

console.log(SerieUno.reproducirCapitulo());