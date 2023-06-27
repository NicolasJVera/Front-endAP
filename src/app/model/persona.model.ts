export class persona {
  id?: number;
  nombre: string;
  apellido: string;
  descripcion: string;
  img: String;

  constructor(nombre: string, apellido: string, descripcion: string, img: string){
      this.nombre = nombre;
      this.apellido = apellido;
      this.descripcion = descripcion;
      this.img = img;
  }
}