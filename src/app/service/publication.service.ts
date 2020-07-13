import { Publication } from '../model/publication';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

private create_publication="http://localhost:8000/new/publication"
private liste_publication="http://localhost:8000/afficher/publication"
private liste_pub="http://localhost:8000/afficher/pub/"
private edit_publication = "http://localhost:8000/modifier/publication/"
private get_publication = "http://localhost:8000/afficher/pub/"
private delete_publication = "http://localhost:8000/supprimer/publication/"

  constructor(private http: HttpClient) { }


  createPublication(publication:Publication){
    return this.http.post(this.create_publication, publication)
  }

  public showPublication() {
    return this.http.get(this.liste_publication)  
  }
  public showPub(id: number) {
    return this.http.get(this.liste_pub +id)  
  }
  updatepublication(publication:Publication , id: number) {
    return this.http.put(this.edit_publication +id, publication)
  }
  getPublicationById(id){
    return this.http.get(this.get_publication + id)
  }
  deletePublication(id: number){
    return this.http.delete(this.delete_publication+ id)
  }
}
