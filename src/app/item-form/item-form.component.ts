import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ItemService } from './../item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  itemForm = this.formBuilder.group({
    titre: "",
    contenu: ""
  });
  constructor(private formBuilder: FormBuilder, private itemService: ItemService) { }

  ngOnInit(): void {
  }

  ngItemForlm() {
    this.itemService.addItem(this.itemForm.value.titre, this.itemForm.value.contenu).subscribe(data => {
      console.log(data)
      this.itemForm.reset()
      this.itemService.getAllItem().subscribe(data => this.itemService.items = data)
    })
  }

}
