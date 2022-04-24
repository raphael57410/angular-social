import { Injectable } from '@angular/core';
import { JwtTokenService } from './jwt-token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, filter, takeWhile } from 'rxjs';
import { ItemObject, CommentObject } from './interface';




@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items?: ItemObject[]


  urlBase = "https://reseau.jdedev.fr/api/article"
  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json',
      "Authorization": 'Bearer' + ' ' + this.tokenService.getToken()
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

        tap((allItem: Array<ItemObject>) => this.items = allItem
        ),
        // catchError(error<TokenObject> => error)
      )
  }

  getAllCommentByItemBy(id: number): Observable<Array<CommentObject>> {
    const token = this.tokenService.getToken();

    return this.http.get<Array<CommentObject>>(this.urlBase + '/' + id + '/comment', {
      headers: {
        "Authorization": 'Bearer' + ' ' + token
      }
    })
      .pipe(

        tap((allComment: Array<CommentObject>) => allComment

        ),
        // catchError(error<TokenObject> => error)
      )
  }

  addItem(titre: string, contenu: string) {

    return this.http.post<ItemObject>(this.urlBase, { titre, contenu }, this.httpOptions)
      .pipe(
        tap((allComment: ItemObject) => allComment
        ),
        // catchError(error<TokenObject> => error)
      )
  }

  deleteItem(id: number) {
    const token = this.tokenService.getToken();

    return this.http.delete<ItemObject>(this.urlBase + '/' + id, {
      headers: {
        "Authorization": 'Bearer' + ' ' + token
      }
    })
      .pipe(
        tap((allComment: ItemObject) => allComment
        ),
        // catchError(error<TokenObject> => error)
      )
  }

  getItems() {
    return this.items
  }
}
