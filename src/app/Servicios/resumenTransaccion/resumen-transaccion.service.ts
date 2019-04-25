import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Url } from 'src/app/global/constante/url';



@Injectable({
  providedIn: 'root'
})
export class ResumenTransaccionService {

  private url = new Url();

  constructor(private httpClient: HttpClient ) { }
  

  obtenerTiposConceptoService():Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/Transaccion/GetTioposConceptos`);   
  }

  obtenerPeriodoService():Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/Transaccion/GetPeriodos`);   
  }

  obtenerSemanaService():Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/Transaccion/GetSemanas`);   
  }


  obtenerAreaService():Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/Transaccion/GetAreas`);   
  }

  obtenerResumenIngresoService(filtroResumenTransacciones: any):Observable<any> {
    let Json = JSON.stringify(filtroResumenTransacciones);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(`${this.url.url}Api/Transaccion/GetResumenIngresos`, Json, {headers: headers} );
  }

  obtenerResumenGastoService(filtroResumenTransacciones: any):Observable<any> {
    let Json = JSON.stringify(filtroResumenTransacciones);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(`${this.url.url}Api/Transaccion/GetResumenGastos`, Json, {headers: headers} );
  }

}

