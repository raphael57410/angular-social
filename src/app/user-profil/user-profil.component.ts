import { Component, OnInit } from '@angular/core';
import { TokenObject } from '../interface';
import { UserService } from './../user.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss']
})
export class UserProfilComponent implements OnInit {

  user!: TokenObject

  constructor(private userService: UserService) {
    this.user = this.userService.getCurrentUser()
  }

  ngOnInit(): void {
  }

}
