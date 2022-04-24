import { Component, OnInit } from '@angular/core';
import { ItemService } from './../item.service';
import { ItemObject } from '../interface';
import { UserService } from './../user.service';
import { UserObject, CommentObject } from './../interface/index';
import { CommentService } from './../comment.service';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  items?: ItemObject[]
  users?: UserObject[]

  commentForm = this.formBuilder.group({
    contenu: "",
  });


  constructor(private formBuilder: FormBuilder, public itemService: ItemService, public userService: UserService, private commentService: CommentService) {
    // fetch all users
    this.userService.getAllUser().subscribe(data => this.users = data)

    // fetch all items
    this.itemService.getAllItem().subscribe(data => this.items = data)

    this.itemService.getAllItem().subscribe(data => this.items = data.map(item => {
      // fetch all comment for one article
      this.itemService.getAllCommentByItemBy(item.id).subscribe(data => item.comment = data)

      return item
    }))

  }

  ngOnInit(): void {
  }

  setItems(items: ItemObject[]) {
    return this.items = items

  }

  deleteItem(id: number) {
    this.itemService.deleteItem(id).subscribe(data => {
      console.log(data)
      this.itemService.getAllItem().subscribe(data => this.items = data)
    })
  }

  addComment(articleId: number) {
    const newComment = {
      contenu: this.commentForm.value.contenu,
      idArt: articleId
    }

    this.commentService.addComment(newComment).subscribe(data => {
      this.commentForm.value.contenu = '',
        console.log(data)
    })
  }

}
