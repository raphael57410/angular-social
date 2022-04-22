import { Component, OnInit } from '@angular/core';
import { ItemService } from './../item.service';
import { ItemObject } from '../interface';
import { UserService } from './../user.service';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  items?: Array<ItemObject>
  constructor(public itemService: ItemService, private userService: UserService) {
    // fetch all users
    this.itemService.getAllItem().subscribe(data => this.items = data.map(item => {
      // fetch all comment for one article
      this.itemService.getAllCommentByItemBy(item.id).subscribe(data => item.comment = data)

      return item
    }))
  }

  ngOnInit(): void {
  }

}
