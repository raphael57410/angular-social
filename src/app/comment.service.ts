import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';
import { JwtTokenService } from './jwt-token.service';
import { CommentObject } from './interface';




@Injectable({
  providedIn: 'root'
})
export class CommentService {

  urlBase = "https://reseau.jdedev.fr/api/comment"
  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient, private tokenService: JwtTokenService) { }

  getAllComment(): Observable<Array<CommentObject>> {
    const token = this.tokenService.getToken();

    return this.http.get<Array<CommentObject>>(this.urlBase, {
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

}
