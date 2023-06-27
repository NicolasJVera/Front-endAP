import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit{
  nombreE: string;
  descripcionE: string;
  duracion: string;
  imagen: string;

  constructor(private educacionS: EducacionService, private router: Router) {}

  ngOnInit(): void {

  }

  onCreate(): void{
    const educacion = new Educacion(this.nombreE, this.descripcionE, this.duracion, this.imagen);
    this.educacionS.save(educacion).subscribe(
      data =>{
        alert("Educacion añadida correctamente");
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
