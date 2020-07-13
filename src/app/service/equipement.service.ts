import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Equipement } from '../model/equipement';

@Injectable({
  providedIn: 'root'
})
export class EquipementService {

  private create_equipement = "http://localhost:8000/new/equipement"
  private liste_equipement = "http://localhost:8000/afficher/equipement"
  private delete_equipement = "http://localhost:8000/supprimer/equipement/"
  private get_equipement = "http://localhost:8000/afficher/equipement/"
  private update_equipement = "http://localhost:8000/modifier/equipement/"

  constructor(private http: HttpClient, private _route: Router) { }

  createEquipement(equipement: Equipement) {
    return this.http.post(this.create_equipement, equipement)
  }
  getEquipement() {
    return this.http.get(this.liste_equipement)
  }

  getEquipementById(id: number) {
    return this.http.get(this.get_equipement + id)
  }

  deleteEquipement(id: number) {
    return this.http.delete(this.delete_equipement + id)
  }
  updateEquipement(equipement: Equipement, id: number) {
    return this.http.put(this.update_equipement + id, equipement)
  }
}
