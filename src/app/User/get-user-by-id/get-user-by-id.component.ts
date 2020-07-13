import { UserService } from 'src/app/service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-get-user-by-id',
  templateUrl: './get-user-by-id.component.html',
  styleUrls: ['./get-user-by-id.component.css']
})
export class GetUserByIdComponent implements OnInit {
  UserDetail: User [] = []
  listeUser: User[] = [];

  constructor(private _service: UserService) { }

  ngOnInit() {
 
  }

}
