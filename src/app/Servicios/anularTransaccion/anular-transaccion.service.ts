import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Url } from 'src/app/global/constante/url';


@Injectable({
  providedIn: 'root'
})
export class AnularTransaccionService {

  private url = new Url();

  constructor(private httpClient: HttpClient) { }

  obtenerTransaccionByIdService(identificador):Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/Transaccion/GetById/` + identificador);   
  }

  anularTransaccionService(transaccion: any){
    let Json = JSON.stringify(transaccion);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put(`${this.url.url}Api/Transaccion/Anular`, Json, {headers: headers} );
  }

}
