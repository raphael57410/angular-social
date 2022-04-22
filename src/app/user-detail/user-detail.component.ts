import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../user.service';
import { UserObject, ItemObject, CommentObject } from '../interface';
import { ItemService } from './../item.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  oneUser!: UserObject

  oneItemUser!: ItemObject[]

  oneCommentUser!: CommentObject[]

  constructor(private route: ActivatedRoute, private userService: UserService, public itemService: ItemService) {

    // get user by id                                                👇 non null assertion
    this.userService.getOneUser(parseInt(this.route.snapshot.paramMap.get('id')!)).subscribe(data => this.oneUser = data)

    // get all item for one user
    let that = this
    this.userService.getItemById(parseInt(this.route.snapshot.paramMap.get('id')!)).subscribe(data => that.oneItemUser = data.slice(0, 5))

    this.userService.getCommentById(parseInt(this.route.snapshot.paramMap.get('id')!)).subscribe(data => that.oneCommentUser = data.slice(0, 5))


  }

  ngOnInit(): void {
  }

}
