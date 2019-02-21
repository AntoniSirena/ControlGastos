import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Url } from 'src/app/global/constante/url';



@Injectable({
  providedIn: 'root'
})
export class ResumenTransaccionService {

  private url = new Url();

  constructor( private httpClient: HttpClient) { }

  obtenerResumenTransaccionService():Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/Transaccion/GetResumemTransacciones`);   
  }
  
}
