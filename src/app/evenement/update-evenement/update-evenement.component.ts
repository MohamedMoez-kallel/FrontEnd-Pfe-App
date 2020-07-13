import { ActivatedRoute, Router } from '@angular/router';
import { EvenementService } from './../../service/evenement.service';
import { Component, OnInit } from '@angular/core';
import { Evenement } from 'src/app/model/evenement';

@Component({
  selector: 'app-update-evenement',
  templateUrl: './update-evenement.component.html',
  styleUrls: ['./update-evenement.component.css']
})
export class UpdateEvenementComponent implements OnInit {

  evenement: Evenement =new Evenement
  constructor(private _service: EvenementService, public actRoute:ActivatedRoute, private _router: Router ) { }
  id = this.actRoute.snapshot.params['id'];


  ngOnInit() {
    this._service.getEvenementById(this.id).subscribe(
      res=> this.evenement=res["data"]
    )
  }

  update() {
    if (window.confirm('Are you sure, you want to update?')) {

      this._service.updateEvenement(this.evenement, this.id)
        .subscribe(
          data => {
            this._router.navigate(['/liste-evenement'])
          })
    }
  }

}
