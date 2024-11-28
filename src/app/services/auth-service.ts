import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { GLOBAL } from "./GLOBAL";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url;

  constructor(
    private _http : HttpClient,
  ) {
    this.url = GLOBAL.url;
  }

  login_usuario(email: string, password: string):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url + "auth/login/",{ email, password },{headers})
  }

  register_usuario( email:string, password:string, name:string):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url + "api/auth/register/",{email, password, name},{headers})
  }

  get_user(): Observable<any> {
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.get(this.url + "api/user/profile/", { headers });
  }

}