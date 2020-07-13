import { Publication } from './../../model/publication';
import { PublicationService } from 'src/app/service/publication.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-publication',
  templateUrl: './update-publication.component.html',
  styleUrls: ['./update-publication.component.css']
})
export class UpdatePublicationComponent implements OnInit {
  listePublication: Publication[] = [];
  publication: Publication = new Publication;

  constructor(private _service: PublicationService, public actRoute: ActivatedRoute, private _router: Router) { }
  id = this.actRoute.snapshot.params['id'];

  ngOnInit() {
    this._service.getPublicationById(this.id).subscribe(
      res => this.publication = res["data"]
    )
  }

  update() {
    if (window.confirm('Are you sure, you want to update?')) {

      this._service.updatepublication(this.publication, this.id)
        .subscribe(
          data => {
            this._router.navigate(['/liste-publication'])
          })
    }
  }

}
