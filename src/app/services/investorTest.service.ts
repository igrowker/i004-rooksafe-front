import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InvestorTestService {
  private url: string = environment.apiUrl;

  constructor(private _http: HttpClient) {}

  send_test(respuestas: any): Observable<any> {
    let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return this._http.post(this.url + 'api/evaluations', respuestas, {
      headers,
    });
  }
  retake_test(respuestas: any): Observable<any> {
    let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return this._http.patch(this.url + 'update-experience', respuestas, {
      headers,
    });
  }
}
