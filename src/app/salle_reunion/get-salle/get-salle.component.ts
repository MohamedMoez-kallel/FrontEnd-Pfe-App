import { SalleReunionService } from './../../service/salle-reunion.service';
import { Salle_reunion } from './../../model/salle_reunion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-salle',
  templateUrl: './get-salle.component.html',
  styleUrls: ['./get-salle.component.css']
})
export class GetSalleComponent implements OnInit {
  salle: Salle_reunion = new Salle_reunion
  listeSalle: Salle_reunion[] = []
  constructor(private _service: SalleReunionService) { }

  ngOnInit(): Salle_reunion[] {
    this._service.listeSalle().subscribe(
      res => this.listeSalle = res["data"]
    )
    return this.listeSalle

  }

}
