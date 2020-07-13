import { Equipement } from './../../model/equipement';
import { Router } from '@angular/router';
import { EquipementService } from './../../service/equipement.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-equipement',
  templateUrl: './create-equipement.component.html',
  styleUrls: ['./create-equipement.component.css']
})
export class CreateEquipementComponent implements OnInit {

  constructor(private _service:EquipementService, private _router:Router ) { }
  equipement:Equipement= new Equipement
  
  
  ngOnInit() {
  }
  ajouterEqui(dataform){
    this.equipement= dataform;
    this._service.createEquipement(dataform)
    .subscribe(
      data=>{
        this._router.navigate(['/liste-equipement'])
      }
    )
    console.log(dataform)

  }
}
