import { EquipementService } from './../../service/equipement.service';
import { Component, OnInit } from '@angular/core';
import { Equipement } from 'src/app/model/equipement';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-equipement',
  templateUrl: './get-equipement.component.html',
  styleUrls: ['./get-equipement.component.css']
})
export class GetEquipementComponent implements OnInit {

  equipement: Equipement= new Equipement;
  listeEquipement: Equipement[]=[]
  constructor(private _service: EquipementService, private _router: Router) { }

  ngOnInit():Equipement[] {  
    this._service.getEquipement()
    .subscribe(
      res => this.listeEquipement = res["data"]
    )
  return this.listeEquipement;
}

deleteEquipement(equipement) {
  if (confirm(`Voulez vous supprimer`)) {
    this._service.deleteEquipement(equipement.Id).subscribe(
      () => console.log(`Employee with ID = ${equipement.Id} Deleted`),
      (err) => console.log(err)

    );
    location.reload();

  }
}

onSelect(equipement) {
  this._router.navigate(['/update-equipement/', equipement.Id])
}
}
