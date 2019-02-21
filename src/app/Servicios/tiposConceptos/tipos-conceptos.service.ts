import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Url } from 'src/app/global/constante/url';




@Injectable({
  providedIn: 'root'
})
export class TiposConceptosService {

  private url = new Url();

  constructor( private httpClient: HttpClient ) {

   }


   obtenerTiposConceptosService():Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/ControlGastos/GetAll`);   
  }

  obtenerTipoConceptoByIdService(identificador):Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/ControlGastos/GetById/` + identificador);   
  }

  obtenerTiposGastosService():Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/ControlGastos/GetTiposGastos`); 
  }

  agregarTipoConceptoService(tipoConcepto: any){
    let Json = JSON.stringify(tipoConcepto);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(`${this.url.url}Api/ControlGastos/Create`, Json, {headers: headers} );
  }

  actualizarTipoConceptoService(tipoConcepto: any){
    let Json = JSON.stringify(tipoConcepto);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put(`${this.url.url}Api/ControlGastos/Update`, Json, {headers: headers} );
  }

  eliminarTipoConceptoService(identificador):Observable<any> {
    return this.httpClient.delete(`${this.url.url}Api/ControlGastos/Delete/` + identificador)
  }


}
