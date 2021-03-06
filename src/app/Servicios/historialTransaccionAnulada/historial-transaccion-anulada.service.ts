import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Url } from 'src/app/global/constante/url';


@Injectable({
  providedIn: 'root'
})
export class HistorialTransaccionAnuladaService {

  private url = new Url();

  constructor( private httpClient: HttpClient) { }


  obtenerTransaccionAnuladasService():Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/Transaccion/HistorialTransaccionAnulada`);   
  }

}
