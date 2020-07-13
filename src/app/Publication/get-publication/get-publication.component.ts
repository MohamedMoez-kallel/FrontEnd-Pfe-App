import { User } from './../../model/user';
import { PublicationService } from '../../service/publication.service';
import { Component, OnInit } from '@angular/core';
import { Publication } from 'src/app/model/publication';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-publication',
  templateUrl: './get-publication.component.html',
  styleUrls: ['./get-publication.component.css']
})
export class GetPublicationComponent implements OnInit {

  publication: Publication = new Publication;
  listePublication: Publication[] = []

  constructor(private _service: PublicationService, private _router: Router) { }

  ngOnInit(): Publication[] {
    this._service.showPublication()
      .subscribe(
        res => this.listePublication = res["data"]
      )
    return this.listePublication;
  }
  onSelect(publication) {
    this._router.navigate(['/update-publication/', publication.Id])
  }


  deletePublication(publication) {
    if (confirm(`Voulez vous supprimer`)) {
      this._service.deletePublication(publication.Id).subscribe(
        () => console.log(`Employee with ID = ${publication.Id} Deleted`),
        (err) => console.log(err)

      );
      location.reload();

    }
  }
}
