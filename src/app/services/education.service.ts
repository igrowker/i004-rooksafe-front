import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  private url: string = environment.apiUrl;

  constructor(private http: HttpClient) {}
  getToken = () => {
    let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return headers;
  };

  getReports(): Observable<any[]> {
    let header = this.getToken();
    return this.http.post<any[]>(`${this.url}`, header);
  }
  getVideos(): Observable<any[]> {
    let header = this.getToken();
    return this.http.post<any[]>(`${this.url}`, header);
  }
  getPodcast(): Observable<any[]> {
    let header = this.getToken();
    return this.http.post<any[]>(`${this.url}`, header);
  }
}
