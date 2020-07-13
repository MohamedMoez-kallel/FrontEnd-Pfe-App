import { Equipement } from 'src/app/model/equipement';
import { EquipementService } from './../../service/equipement.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-equipemet',
  templateUrl: './update-equipemet.component.html',
  styleUrls: ['./update-equipemet.component.css']
})
export class UpdateEquipemetComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  equipement :Equipement =new Equipement
  constructor(public actRoute: ActivatedRoute, private _service: EquipementService, private _router: Router) { }

  ngOnInit() { 
    this._service.getEquipementById(this.id).subscribe(
    res => this.equipement = res["data"]
  )
  console.log(this.equipement)
  }
  update(){
     if (window.confirm('Are you sure, you want to update?')) {

    this._service.updateEquipement(this.equipement, this.id)
      .subscribe(
        data => {
          this._router.navigate(['/liste-equipement'])
        })
  }

  }
}
