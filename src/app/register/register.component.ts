import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm: any

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      email: "" as string,
      pseudo: "" as string,
      password: "" as string,
      verifPassword: "" as string,
    })
  }

  ngOnInit(): void {
  }

  validForm() {
    console.log(this.userForm.value);

  }

}
