import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import TokenObject from './interface';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  isConnected: boolean = false

  urlBase = "https://reseau.jdedev.fr/api/user"
  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  loginUser(email: string, password: string): Observable<TokenObject> {

    return this.http.post<TokenObject>(this.urlBase + "/connect", { email, password }, this.httpOptions)
      .pipe(
        tap((token: TokenObject) => token),
        // catchError(error<TokenObject> => error)
      )
  }

  getIsConnected(): boolean {
    return this.isConnected
  }

  setIsConnected(bool: boolean) {
    if (bool) {
      this.isConnected = !this.isConnected;
    }
  }
}
