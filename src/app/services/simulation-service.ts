import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { GLOBAL } from "./GLOBAL";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SimulatorService {

  private url: string =  environment.url;

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

  types_symbol(token:string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.get(this.url + "finnhub/symbols", { headers });
  }


  update_symbol(symbol:string,token:string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.get(this.url + "finnhub/candles/"+symbol, { headers });
  }

  get_symbols(token:string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.get(this.url + "finnhub/symbols", { headers });
  }

}