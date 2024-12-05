import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WebSocketSubject } from 'rxjs/webSocket';
import { isPlatformBrowser } from '@angular/common';

interface SymbolResponse {
  status: string;
  data: {
    symbol: string;
    name: string;
  }[];
}
@Injectable({
  providedIn: 'root'
})
export class SimulatorService {
  private url: string =  environment.apiUrl;
  private socket$: WebSocketSubject<any> | undefined;
  private isBrowser: boolean;

  constructor(
    private _http : HttpClient,
    @Inject(PLATFORM_ID)  platformId: Object) {
      this.isBrowser = isPlatformBrowser(platformId);
    if (typeof window !== 'undefined') {  // Verifica si está en el navegador
      this.socket$ = new WebSocketSubject(this.url+'ws/trades');
    }
  }

  sendMessage(message: string) {
    if (this.socket$) {
      this.socket$.next({ message });
    }
  }

  getMessages() {
    return this.socket$;
  }

  closeConnection() {
    if (this.socket$) {
      this.socket$.complete();
    }
  }


  update_symbol(symbol:string,token:string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.get(this.url + "finnhub/candles/"+symbol, { headers });
  }

  get_symbols(token:string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.get<SymbolResponse>(this.url + "finnhub/symbols", { headers });
  }

  get_wallet(token:string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.get(this.url + "api/wallet/status", { headers });
  }

  add_founds(amount: number, token: string):Observable<any>{
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` });
    return this._http.post(this.url + "api/wallet/add_money", {amount} ,{headers})
  }

  isRunningInBrowser(): boolean {
    return this.isBrowser;
  }

}