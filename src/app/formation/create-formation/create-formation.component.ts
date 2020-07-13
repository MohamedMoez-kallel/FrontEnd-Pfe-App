import { Formation } from './../../model/formation';
import { FormationService } from '../../service/formation.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-formation',
  templateUrl: './create-formation.component.html',
  styleUrls: ['./create-formation.component.css']
})
export class CreateFormationComponent implements OnInit {

  constructor(private _service: FormationService, private _router: Router) { }
  formation: Formation = new Formation
  
  ngOnInit() {
  }

  ajouterFor(dataform) {
    this.formation = dataform;

    this._service.createFormation(dataform)
      .subscribe(
        data => {
          this._router.navigate(['/liste-formation'])
        }
      )
    console.log(dataform)


  }
}
