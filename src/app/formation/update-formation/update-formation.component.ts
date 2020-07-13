import { Formation } from 'src/app/model/formation';
import { FormationService } from 'src/app/service/formation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styleUrls: ['./update-formation.component.css']
})
export class UpdateFormationComponent implements OnInit {

  formation: Formation= new Formation
  constructor( private _service: FormationService,public actRoute: ActivatedRoute,private _router: Router) { }
  id = this.actRoute.snapshot.params['id'];

  ngOnInit() {
    this._service.getFormationById(this.id).subscribe(
      res=> this.formation= res["data"]
    )
  }

  update() {
    if (window.confirm('Are you sure, you want to update?')) {

      this._service.updateFormation(this.formation, this.id)
        .subscribe(
          data => {
            this._router.navigate(['/liste-formation'])
          })
    }
  }

}
