import { Formation } from 'src/app/model/formation';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private create_formation = "http://localhost:8000/new/formation"
  private liste_formation = "http://localhost:8000/afficher/formation"
  private get_formation = "http://localhost:8000/afficher/formation/"
  private delete_formation = "http://localhost:8000/supprimer/formation/"
  private update_formation = "http://localhost:8000/modifier/formation/"
  private get_for_date = "http://localhost:8000/afficher/formation/date"

  constructor(private http: HttpClient, private _route: Router) { }


  createFormation(formation: Formation) {
    return this.http.post(this.create_formation, formation)
  }

  public showFormation() {
    return this.http.get(this.liste_formation)
  }

  public getFormationById(id) {
    return this.http.get(this.get_formation + id)
  }
  deletePub(id) {
    return this.http.delete(this.delete_formation + id)
  }
  updateFormation(formation: Formation, id: number) {
    return this.http.put(this.update_formation + id, formation)
  }
  public getForDate() {
    return this.http.get(this.get_for_date)
  }

}
