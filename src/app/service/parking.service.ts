import { Parking } from './../model/parking';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {


  private create_parking = "http://localhost:8000/new/place/parking"
  private liste_parking  = "http://localhost:8000/afficher/place/parking"
  private delete_parking = "http://localhost:8000/supprimer/parking/"
  constructor(private http: HttpClient, private _route: Router) { }


  createParking(parking: Parking) {
    return this.http.post(this.create_parking, parking)
  }

  public showParking() {
    return this.http.get(this.liste_parking)
  }


}
