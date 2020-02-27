import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userModel } from '../models/user.model';
import { map } from "rxjs/operators";
import { authorModel } from '../models/author.model';
import { bookModel } from '../models/book.model';


@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {
  url: string = 'http://127.0.0.1:8000/api/auth/';
  userToken:string;
  constructor( private http: HttpClient) {
    this.readToken();
   }

  login(user: userModel){
    const headers = new HttpHeaders ({
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
    });
    const authData = {
      ...user
    };
    return this.http.post(this.url+'login',authData,{headers})
    .pipe(map(resp=>{this.saveToken(resp['access_token']);
    return resp;
    }));
  }

  logout(){
    const headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Authorization': 'Bearer '+ this.userToken
      });
      sessionStorage.removeItem('token');
      return this.http.get(this.url+'logout',{headers});

  }

  private saveToken( idToken:string){
    this.userToken = idToken;
    sessionStorage.setItem('token',idToken);
  }

  readToken(){
    if (sessionStorage.getItem('token')) {
      this.userToken = sessionStorage.getItem('token');      
    }else{
      this.userToken = '';
    }

  }

  authAutenticated(): boolean {
    return this.userToken.length > 2;
  }

  getBook(){
    const headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Authorization': 'Bearer '+ this.userToken
      });
      return this.http.get(this.url+'book',{headers})
  }

  saveBook(book:bookModel){
    const headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Authorization': 'Bearer '+ this.userToken
      });
      const data = {
        date: book.date,
        tittle: book.tittle,
        author: book.idAuthor.slice(0,1)
      };
      return this.http.post(this.url+'book',data,{headers})
  }

 getAuthor(){
  const headers = new HttpHeaders ({
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization': 'Bearer '+ this.userToken
    });
    return this.http.get(this.url+'author',{headers})
 }

 saveAuthor(author:authorModel){
  const headers = new HttpHeaders ({
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization': 'Bearer '+ this.userToken
    });
    const authData = {
      ...author
    };
    return this.http.post(this.url+'author',authData,{headers});
 }
}
