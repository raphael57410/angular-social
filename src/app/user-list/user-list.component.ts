import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users?: Array<object>
  constructor(public userService: UserService) {
    this.userService.getAllUser().subscribe(data => this.users = data
    )
  }

  ngOnInit(): void {
  }
}
