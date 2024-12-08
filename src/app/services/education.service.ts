import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  private url: string = environment.apiUrl;
  token: any = '';

  constructor(private http: HttpClient, private authService: AuthService) {}
  private getToken(): HttpHeaders {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return headers;
  }

  getEducationContent(): Observable<any> {
    if (this.authService.isRunningInBrowser()) {
      this.token = this.getToken();
    }
    const headers = this.token;
    return this.http
      .get<any>(`${this.url}/api/education/content/?type=all`, { headers })
      .pipe(map((response) => response.results.data));
  }
}
