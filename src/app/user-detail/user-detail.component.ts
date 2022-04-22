import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../user.service';
import UserObject from '../interface'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  oneUser!: UserObject

  constructor(private route: ActivatedRoute, private userService: UserService) {

    // trouver un user part rapport a son id                         👇 non null assertion
    this.userService.getOneUser(this.route.snapshot.paramMap.get('id')!).subscribe(data => this.oneUser = data)
  }

  ngOnInit(): void {
  }

}
