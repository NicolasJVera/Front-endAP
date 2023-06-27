import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyectos';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit{
  nombre: string;
  descripcion: string;
  imagen: string;

  constructor(private proyectoService: ProyectoService, private router: Router) { }

  ngOnInit(): void { 

  }

  onCreate(): void{
    const educacion = new Proyecto(this.nombre, this.descripcion, this.imagen);
    this.proyectoService.save(educacion).subscribe(
      data =>{
        alert("Proyecto añadido correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any) {

  }
}
