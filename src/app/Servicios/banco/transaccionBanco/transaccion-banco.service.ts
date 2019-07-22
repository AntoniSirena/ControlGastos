import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Url } from 'src/app/global/constante/url';

@Injectable({
  providedIn: 'root'
})
export class TransaccionBancoService {

  private url = new Url();

  constructor(private httpClient: HttpClient) { }

  obtenerTransaccionesService():Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/TransaccionBanco/GetAll`);   
  }

  obtenerTransaccionByIdService(identificador):Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/TransaccionBanco/GetById/` + identificador);   
  }

  obtenerTiposTransaccionService():Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/TransaccionBanco/GetTioposTransaccion`);   
  }

  obtenerBancoService():Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/TransaccionBanco/GetBanco`);   
  }

  obtenerCuentaByBancoIdService(identificador):Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/TransaccionBanco/GetCuenta/` + identificador);   
  }

  obtenerRazonesAjusteService():Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/TransaccionBanco/GetRazonesAjuste`);   
  }

  agregarTransaccionService(banc_TransaccionesBanco: any){
    let Json = JSON.stringify(banc_TransaccionesBanco);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(`${this.url.url}Api/TransaccionBanco/Create`, Json, {headers: headers} );
  }

}
