import { Router } from '@angular/router';
import { EvenementService } from './../../service/evenement.service';
import { Component, OnInit } from '@angular/core';
import { Evenement } from 'src/app/model/evenement';

@Component({
  selector: 'app-create-evenement',
  templateUrl: './create-evenement.component.html',
  styleUrls: ['./create-evenement.component.css']
})
export class CreateEvenementComponent implements OnInit {

  constructor(private _service:EvenementService, private _router:Router) { }
  evenement: Evenement= new Evenement
  ngOnInit() {
  }

  ajouterEvn(dataform){
    this.evenement= dataform;
    this._service.createEvenement(dataform)
    .subscribe(
      data=>{
        this._router.navigate(['/home'])
      }
    )
    console.log(dataform)

  }


}
