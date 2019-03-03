import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Url } from 'src/app/global/constante/url';


@Injectable({
  providedIn: 'root'
})
export class RazonesAnulacionTransaccionService {

  private url = new Url();

  constructor(private httpClient: HttpClient) {
   }


   obtenerRazonesService():Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/RazonesAnulacionTransaccion/GetAll`);   
  }

  obtenerRazonByIdService(identificador):Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/RazonesAnulacionTransaccion/GetById/` + identificador);   
  }

  agregarRazonService(razon: any){
    let Json = JSON.stringify(razon);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(`${this.url.url}Api/RazonesAnulacionTransaccion/Create`, Json, {headers: headers} );
  }

  actualizarRazonService(razon: any){
    let Json = JSON.stringify(razon);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put(`${this.url.url}Api/RazonesAnulacionTransaccion/Update`, Json, {headers: headers} );
  }

  eliminarRazonService(identificador):Observable<any> {
    return this.httpClient.delete(`${this.url.url}Api/RazonesAnulacionTransaccion/Delete/` + identificador)
  }
 

}

