import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Url } from 'src/app/global/constante/url';



@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  private url = new Url();

  constructor(private httpClient: HttpClient ) { }


  obtenerTransaccionesService():Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/Transaccion/GetAll`);   
  }


  obtenerTiposConceptoService():Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/Transaccion/GetTioposConceptos`);   
  }

  obtenerSemanaService():Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/Transaccion/GetSemanas`);   
  }


  obtenerAreaService():Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/Transaccion/GetAreas`);   
  }


  agregarTransaccionGastoService(gasto: any){
    let Json = JSON.stringify(gasto);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(`${this.url.url}Api/Transaccion/Create`, Json, {headers: headers} );
  }


}

