import { ParkingService } from './../../service/parking.service';
import { Parking } from './../../model/parking';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-parking',
  templateUrl: './get-parking.component.html',
  styleUrls: ['./get-parking.component.css']
})
export class GetParkingComponent implements OnInit {

  parking: Parking= new Parking;
  listeParking: Parking[]=[]
  constructor(private _service: ParkingService, private _router: Router) { }

  ngOnInit():Parking[] {  
    this._service.showParking()
    .subscribe(
      res => this.listeParking = res["data"]
    )
  return this.listeParking;
}

}



