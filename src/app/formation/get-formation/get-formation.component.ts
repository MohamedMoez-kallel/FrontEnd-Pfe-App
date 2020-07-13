import { Component, OnInit } from '@angular/core';
import { FormationService } from 'src/app/service/formation.service';
import { Router } from '@angular/router';
import { Formation } from 'src/app/model/formation';

@Component({
  selector: 'app-get-formation',
  templateUrl: './get-formation.component.html',
  styleUrls: ['./get-formation.component.css']
})
export class GetFormationComponent implements OnInit {
  formation: Formation = new Formation;
  listeFormation: Formation[] = []
  constructor(private _service: FormationService, private _router: Router) { }

  ngOnInit(): Formation[] {
    this._service.showFormation()
      .subscribe(
        res => this.listeFormation = res["data"]
      )
    return this.listeFormation;
  }

  deleteFor(formation) {
    if (confirm(`Voulez vous supprimer`)) {
      this._service.deletePub(formation.Id).subscribe(
        (err) => console.log(err)

      );
      location.reload();

    }
  }
  onSelect(formation) {
    this._router.navigate(['/update-formation/', formation.Id])
  }
}
