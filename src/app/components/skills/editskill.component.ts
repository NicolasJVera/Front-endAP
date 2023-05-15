import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-editskill',
  templateUrl: './editskill.component.html',
  styleUrls: ['./editskill.component.css'],
})
export class EditSkillComponent implements OnInit {
  skill: Skills = null;
  constructor(
    private skillService: SkillService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.listaPorId(id).subscribe((data) => {
      this.skill = data;
    });
  }
  onUpdate(): void {
    (function () {
      'use strict';

      var forms = document.querySelectorAll('.needs-validation');

      
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
          'submit',
          function (event: any): void {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }

            form.classList.add('was-validated');
          },
          false
        );
      });
    })();

    //verificados los campos, realiza la actualizacion
    const id: number = this.activatedRouter.snapshot.params['id'];
    this.skillService.update(id, this.skill).subscribe((data) => {
      this.skillService = data;
      alert('Skill Modificada');
      this.router.navigate(['']);
    });
  }
}