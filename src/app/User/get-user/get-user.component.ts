import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
  user: User = new User;
  listeUser: User[] = [];
  nom: string;

  prenom :string;

  constructor(private _service: UserService, private _router: Router) { }

  ngOnInit(): User[] {

    this._service.showEmploye()
      .subscribe(
        res => this.listeUser = res["data"]
      )
    return this.listeUser;
  }

  onSelect(user) {
    console.log(user.Id)
    this._router.navigate(['/update-employe/', user.Id])
  }

  deleteEmploye(user) {
    if (confirm(`Voulez vous supprimer`)) {
      this._service.deleteEmployee(user.Id).subscribe(
        () => console.log(`Employee with ID = ${user.Id} Deleted`),
        (err) => console.log(err)

      );
      location.reload();

    }
  }

  Search(){
    if(this.nom !=""){
      this.listeUser= this.listeUser.filter(res=>{
        return res.nom.toLocaleLowerCase().match(this.nom.toLocaleLowerCase())
      })
    }
    else if (this.nom ==""){
      this.ngOnInit();
    }

  }
  
}




