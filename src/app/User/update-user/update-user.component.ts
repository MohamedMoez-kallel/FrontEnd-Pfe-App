import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  listeUser: User[] = [];

  user: User = new User;
  employeeData: any = {};
  postdata: User;

  constructor(private _service: UserService, private _router: Router, public actRoute: ActivatedRoute) { }

  ngOnInit() {
    this._service.getEmployeById(this.id).subscribe(
      res => this.user = res["data"]
    )
    console.log(this.user)
  }
  update() {
    if (window.confirm('Are you sure, you want to update?')) {

      this._service.updateemploye(this.user, this.id)
        .subscribe(
          data => {
            this._router.navigate(['/list-employes'])
          })
    }
  }


}
