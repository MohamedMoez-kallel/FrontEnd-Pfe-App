import { Evenement } from 'src/app/model/evenement';
import { Router } from '@angular/router';
import { EvenementService } from './../../service/evenement.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-evenement',
  templateUrl: './get-evenement.component.html',
  styleUrls: ['./get-evenement.component.css']
})
export class GetEvenementComponent implements OnInit {

  evenement: Evenement = new Evenement;
  listeEvenement: Evenement[] = []
  constructor(private _service: EvenementService, private _router: Router) { }

  ngOnInit(): Evenement[] {
    this._service.getEvenement()
      .subscribe(
        res => this.listeEvenement = res["data"]
      )
    return this.listeEvenement;
  }

deleteEvenement(evenement){
  if (confirm(`Voulez vous supprimer`)) {
    this._service.deleteEvenement(evenement.Id).subscribe(
      () => console.log(`Employee with ID = ${evenement.Id} Deleted`),
      (err) => console.log(err)

    );
    location.reload();

  }
}

onSelect(evenement) {
  this._router.navigate(['/update-evenement/', evenement.Id])
}
}


