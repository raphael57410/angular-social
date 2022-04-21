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
    return this.jwtToken
  }
  setToken(token: string) {
    if (token) {
      this.jwtToken = token
    }
  }

  decodeToken() {
    if (this.jwtToken) {
      this.decodedToken = jwt_decode(this.jwtToken)
    }
  }
}
