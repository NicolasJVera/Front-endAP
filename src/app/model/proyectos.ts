export class Proyecto {
  id?: number;
  nombre: string;
  descripcion: String;
  imagen: string = '../../../assets/img/proyecto.png';

  constructor(nombre: string, descripcion: string, imagen: string){
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.imagen = imagen;
  }
}