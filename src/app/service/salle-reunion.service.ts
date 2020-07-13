import { Salle_reunion } from './../model/salle_reunion';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalleReunionService {

  private add_salle = "http://localhost:8000/new/salle_reunion"
  private liste_salle = "http://localhost:8000/afficher/salle"

  constructor(private http: HttpClient) { }

  addSalle(salle: Salle_reunion) {
    return this.http.post(this.add_salle, salle)
  }
  public listeSalle() {
    return this.http.get(this.liste_salle)
  }
}
