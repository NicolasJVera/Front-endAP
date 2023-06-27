export class Proyecto {
  id?: number;
  nombre: string;
  descripcion: String;
  imagen: string;

  constructor(nombre: string, descripcion: string, imagen: string){
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.imagen = imagen;
  }
}