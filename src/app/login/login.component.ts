import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { JwtTokenService } from '../jwt-token.service';
import { Router } from '@angular/router';
import { TokenObject } from '../interface';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    email: "",
    password: ""
  });

  constructor(private formBuilder: FormBuilder, private userService: UserService, private tokenService: JwtTokenService, private router: Router) { }

  ngOnInit(): void {
  }


  ngLogin() {
    const that = this
    this.userService.loginUser(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next(data) {
        that.tokenService.setToken(data.token)
      }
    }
    )

    this.userService.setIsConnected(true);
    this.router.navigate(['utilisateur/liste'])

  }

}
