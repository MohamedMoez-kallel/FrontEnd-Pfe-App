import { EvenementService } from './../service/evenement.service';
import { Evenement } from './../model/evenement';
import { Component, OnInit } from '@angular/core';
import { FormationService } from '../service/formation.service';
import { Formation } from '../model/formation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formation: Formation = new Formation;
  listeFormation: Formation[] = []
  evenement: Evenement= new Evenement;
  listeEvenement: Evenement= new Evenement
  constructor(private _service: FormationService , private service:EvenementService) { }

  ngOnInit() {

    this._service.getForDate()
    .subscribe(
      res => this.listeFormation = res["data"]
    )
    this.service.getForDate()
    .subscribe(
      resultat=> this.listeEvenement= resultat["data"]
    )
  return this.listeFormation ,this.listeEvenement; 
 }


}
