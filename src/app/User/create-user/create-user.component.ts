import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private _service: UserService, private _router: Router) { }
  errorRegister = false
  confirmPassword: string;
  user: User = new User
  ngOnInit() {
  }

  onChangeInput(v: string): void {

    this.errorRegister = false;
  }
  registerUser(dataform) {
    this.user = dataform;

    this._service.createUser(dataform)
      .subscribe(
        data => {
          this._router.navigate(['/list-employes'])
        },
        err => {
          if (err.error["error"] == "Adresse e-mail est utilisée par un autre utilisateur") {
            this.errorRegister = true;
          }
        }

      )
    console.log(dataform)
    

  }
}
