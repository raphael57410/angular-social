import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {

  jwtToken?: string
  decodedToken?: { [key: string]: string; }

  constructor() { }

  getToken() {
    return localStorage.getItem('TOKEN')
  }
  setToken(token: string) {
    if (token) {
      this.jwtToken = token
      localStorage.setItem('TOKEN', token)
    }
  }

  decodeToken() {
    if (this.jwtToken) {
      this.decodedToken = jwt_decode(this.jwtToken)
    }
  }
}
