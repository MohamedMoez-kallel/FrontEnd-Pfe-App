import { Publication } from './../../model/publication';
import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../../service/publication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-publication',
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.css']
})
export class CreatePublicationComponent implements OnInit {

  constructor(private _service: PublicationService, private _router: Router) { }
  publication:Publication= new Publication
  
  ngOnInit() {
  }
  
  ajouterPub(dataform) {
    this.publication = dataform;

    this._service.createPublication(dataform)
      .subscribe(
        data => {
          this._router.navigate(['/liste-publication'])
        }
      )
    console.log(dataform)
    

  }
}
