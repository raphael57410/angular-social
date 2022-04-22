import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenObject, UserObject, ItemObject, CommentObject } from './interface';
import { JwtTokenService } from './jwt-token.service';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  isConnected: boolean = false
  currentUser!: TokenObject

  urlBase = "https://reseau.jdedev.fr/api/user"
  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient, private tokenService: JwtTokenService) { }

  loginUser(email: string, password: string): Observable<TokenObject> {
    return this.http.post<TokenObject>(this.urlBase + "/connect", { email, password }, this.httpOptions)
      .pipe(
        tap((token: TokenObject) => {
          this.currentUser = token;
          return token
        }),
        // catchError(error<TokenObject> => error)
      )
  }

  getAllUser(): Observable<Array<UserObject>> {
    const token = this.tokenService.getToken();

    return this.http.get<Array<UserObject>>(this.urlBase, {
      headers: {
        "Authorization": 'Bearer' + ' ' + token
      }
    })
      .pipe(

        tap((allUser: Array<UserObject>) => allUser
        ),
        // catchError(error<TokenObject> => error)
      )
  }

  addUser<UserObject>(pseudo: string, email: string, password: string, avatar: string) {
    return this.http.post<UserObject>(this.urlBase, { pseudo, email, password, avatar }, this.httpOptions)
      .pipe(
        tap((data: UserObject) => data),
        // catchError(error<TokenObject> => error)
      )
  }

  getOneUser(id: number): Observable<UserObject> {
    const token = this.tokenService.getToken();

    return this.http.get<UserObject>(this.urlBase + '/' + id, {
      headers: {
        "Authorization": 'Bearer' + ' ' + token
      }
    })
      .pipe(
        tap((User: UserObject) => User
        ),
        // catchError(error<TokenObject> => error)
      )
  }

  // Article
  getCommentById(id: number): Observable<CommentObject[]> {
    const token = this.tokenService.getToken();

    return this.http.get<CommentObject[]>(this.urlBase + '/' + id + '/comment', {
      headers: {
        "Authorization": 'Bearer' + ' ' + token
      }
    })
      .pipe(
        tap((comment: CommentObject[]) => comment
        ),
        // catchError(error<TokenObject> => error)
      )
  }

  // Item
  getItemById(id: number): Observable<ItemObject[]> {
    const token = this.tokenService.getToken();

    return this.http.get<ItemObject[]>(this.urlBase + '/' + id + '/article', {
      headers: {
        "Authorization": 'Bearer' + ' ' + token
      }
    })
      .pipe(
        tap((item: ItemObject[]) => item
        ),
        // catchError(error<TokenObject> => error)
      )
  }

  getIsConnected(): boolean {
    return this.isConnected
  }

  getCurrentUser(): TokenObject {
    return this.currentUser
  }

  setIsConnected(bool: boolean) {
    if (bool) {
      this.isConnected = !this.isConnected;
    }
  }
}
