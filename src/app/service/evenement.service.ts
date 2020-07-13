import { Evenement } from './../model/evenement';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  private create_evenement = "http://localhost:8000/new/evenement"
  private liste_evenement = "http://localhost:8000/afficher/evenement"
  private delete_evenement = "http://localhost:8000/supprimer/evenement/"
  private get_evenement = "http://localhost:8000/afficher/evenement/"
  private update_evenement = "http://localhost:8000/modifier/evenement/"
  private get_for_date = "http://localhost:8000/afficher/evenement/date"
  constructor(private http: HttpClient, private _route: Router) { }

  createEvenement(evenement: Evenement) {
    return this.http.post(this.create_evenement, evenement)
  }
  getEvenement() {
    return this.http.get(this.liste_evenement)
  }
  deleteEvenement(id: number) {
    return this.http.delete(this.delete_evenement + id)
  }
  getEvenementById(id: number){
    return this.http.get(this.get_evenement+ id)
  }
  updateEvenement(evenement: Evenement, id: number){
    return this.http.put(this.update_evenement+ id, evenement)
  }
  public getForDate() {
    return this.http.get(this.get_for_date)
  }
}
