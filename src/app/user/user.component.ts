import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './../user.service';
import UserObject from '../interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users?: Array<UserObject>

  constructor(public userService: UserService, private router: Router) {
    // fetch all users
    this.userService.getAllUser().subscribe(data => this.users = data)
  }

  ngOnInit(): void {
  }

  detailUser(userId: number) {
    this.router.navigate(['utilisateur/detail/' + userId])
  }

}
