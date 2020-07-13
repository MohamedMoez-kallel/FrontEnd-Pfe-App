import { Parking } from './../../model/parking';
import { ParkingService } from './../../service/parking.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-parking',
  templateUrl: './create-parking.component.html',
  styleUrls: ['./create-parking.component.css']
})
export class CreateParkingComponent implements OnInit {

  constructor(private _service: ParkingService, private _router: Router) { }
  parking:Parking= new Parking
  
  ngOnInit() {
  }
  
  ajouterPub(dataform) {
    this.parking = dataform;

    this._service.createParking(dataform)
      .subscribe(
        data => {
          this._router.navigate(['/liste-place-parking'])
        }
      )
    console.log(dataform)
    

  }

}
