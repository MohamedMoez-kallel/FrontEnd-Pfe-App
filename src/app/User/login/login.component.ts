import { User } from './../../model/user';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error = '';
  loginUserData = {}
  emailRegister=false
  errorRegister=false
  user: User = new User
  constructor(private _service: UserService, private _router: Router) { }

  ngOnInit() {
  }
  onChangeInput(v: string): void {  
    this.emailRegister=false;
    this.errorRegister=false;
  }
  loginUser () {
    this._service.loginUser(this.loginUserData)
    .subscribe(
      data => {
        this.user = data ;
        console.log(data)
        console.log(this.user)
        localStorage.setItem('Token', data.Token)
        localStorage.setItem('Email', data.Email);
        localStorage.setItem('Departement', data.Departement);
        localStorage.setItem('Id', data.Id);

      //  console.log(this.user.departement)
        this._router.navigate(['home'])
      },
      err => {
        if (err.error["error"] == "Adresse e-mail introuvable") {
          this.emailRegister = true;
        }
        if (err.error["error"] == "Invalid login credentials. Please try again") {
          this.errorRegister = true;
        } }   
         ) 
  }
}
