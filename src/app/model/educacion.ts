export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;
    duracion: string;
    imagen: string;

    constructor(nombreE: string, descripcionE: string, duracion: string, imagen: string) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.duracion = duracion;
        this.imagen = imagen;
    }
}
