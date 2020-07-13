import { SalleReunionService } from './../../service/salle-reunion.service';
import { Salle_reunion } from './../../model/salle_reunion';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-salle',
  templateUrl: './create-salle.component.html',
  styleUrls: ['./create-salle.component.css']
})
export class CreateSalleComponent implements OnInit {

  constructor(private _service: SalleReunionService, private _router: Router) { }
  salle: Salle_reunion= new Salle_reunion
  ngOnInit() {
  }
  ajouterSalle(dataform) {
    this.salle = dataform;

    this._service.addSalle(dataform)
      .subscribe(
        data => {
          this._router.navigate(['/afficher-salle'])
        }
      )
    console.log(dataform)
    

  }
}
