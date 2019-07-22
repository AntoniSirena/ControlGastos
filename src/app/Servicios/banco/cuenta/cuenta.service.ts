import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Url } from 'src/app/global/constante/url';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  private url = new Url();

  constructor(private httpClient: HttpClient) { }

  obtenerCuentaService():Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/Cuenta/GetAll`);   
  }

  obtenerCuentaByIdService(identificador):Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/Cuenta/GetById/` + identificador);   
  }

  obtenerTipoCuentaService():Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/Cuenta/GetTipoCuenta`);
  }

  obtenerBancoService():Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/Cuenta/GetBanco`);
  }

  agregarCuentaService(banc_Cuenta: any){
    let Json = JSON.stringify(banc_Cuenta);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(`${this.url.url}Api/Cuenta/Create`, Json, {headers: headers} );
  }

  actualizarCuentaService(banc_Cuenta: any){
    let Json = JSON.stringify(banc_Cuenta);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put(`${this.url.url}Api/Cuenta/Update`, Json, {headers: headers} );
  }

  eliminarCuentaService(identificador):Observable<any> {
    return this.httpClient.delete(`${this.url.url}Api/Cuenta/Delete/` + identificador)
  }


}
