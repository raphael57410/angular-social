import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from './../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm: any

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.userForm = this.formBuilder.group({
      email: "" as string,
      pseudo: "" as string,
      avatar: "" as string,
      password: "" as string,
      verifPassword: "" as string,
    })
  }

  ngOnInit(): void {
  }

  validForm() {
    const data = this.userForm.value
    this.userService.addUser(data.pseudo, data.email, data.password, data.avatar).subscribe(data => console.log(data)
    )
    this.router.navigate(['/'])


  }

}
