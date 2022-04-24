import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
  }

  logOut() {
    localStorage.clear()
    this.userService.setIsConnected(false)
  }

}
