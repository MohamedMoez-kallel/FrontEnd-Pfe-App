import { User } from 'src/app/model/user';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _loginUrl = " http://localhost:8000/api/utilisateur/login"
  private _create_employe = "http://localhost:8000/new/utilisateur"
  private _list_employe = "http://localhost:8000/afficher/utilisateur"
  private _edit_employe = "http://localhost:8000/modifier/utilisateur/"
  private _delete_employe = "http://localhost:8000/supprimer/utilisateur/"
  private _get_employe = "http://localhost:8000/afficher/user/"
  
  constructor(private http: HttpClient, private _route: Router, private _router: Router) { }

  public loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }
  createUser(user: User) {
    return this.http.post(this._create_employe, user)
  }
  public showEmploye() {
    return this.http.get(this._list_employe)
  }
  updateemploye(user: User, id: number) {
    return this.http.put(this._edit_employe + id, user)
  }
  deleteEmployee(id: number) {
    return this.http.delete(this._delete_employe + id)
  }
  getEmployeById(id:number) {
    return this.http.get(this._get_employe + id)
  }
  get isAuthenticated() {
    return !!localStorage.getItem('Token');
  }
  get isAdmin() {
    return (localStorage.getItem('Departement') === 'Finances et opérations') 
 }
  logout() {
    localStorage.removeItem('Token');
    localStorage.removeItem('Email');
    localStorage.removeItem('Departement');
    localStorage.removeItem('Id');
    this._route.navigateByUrl('login');
  }




}