import { Injectable } from '@angular/core';
import { JwtTokenService } from './jwt-token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, filter, takeWhile } from 'rxjs';
import { ItemObject } from './interface';




@Injectable({
  providedIn: 'root'
})
export class ItemService {

  urlBase = "https://reseau.jdedev.fr/api/article"
  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient, private tokenService: JwtTokenService) { }

  getAllItem(): Observable<Array<ItemObject>> {
    const token = this.tokenService.getToken();

    return this.http.get<Array<ItemObject>>(this.urlBase, {
      headers: {
        "Authorization": 'Bearer' + ' ' + token
      }
    })
      .pipe(

        tap((allItem: Array<ItemObject>) => allItem
        ),
        // catchError(error<TokenObject> => error)
      )
  }
}
