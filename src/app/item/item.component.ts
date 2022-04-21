import { Component, OnInit } from '@angular/core';
import { ItemService } from './../item.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  items?: Array<object>
  constructor(public itemService: ItemService) {
    // fetch all users
    this.itemService.getAllItem().subscribe(data => this.items = data
    )
  }

  ngOnInit(): void {
  }

}
