import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rh-Projet-Client';
  currentUser: User;
  user: User = new User

  constructor(private userService: UserService) { }
}
