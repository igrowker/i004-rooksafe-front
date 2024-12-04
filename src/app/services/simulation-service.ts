import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
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

  constructor(
    private _http : HttpClient,
  ) {
  }

  simulator_start(investment_amount: number, asset_type: string, token: string):Observable<any>{
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` });
    return this._http.post(this.url + "api/simulator/start",{ investment_amount, asset_type },{headers})
  }

  simulator_status(token:string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.get(this.url + "api/simulator/status", { headers });
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
    return this._http.get<SymbolResponse>(this.url + "api/wallet/status", { headers });
  }

  add_founds(amount: number, token: string):Observable<any>{
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` });
    return this._http.post(this.url + "api/wallet/add_money", {amount} ,{headers})
  }

}