import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistorialTransaccionAnuladaService {

  constructor( private httpClient: HttpClient) { }


  obtenerTransaccionAnuladasService():Observable<any> {
    return this.httpClient.get("http://localhost:61575/Api/Transaccion/HistorialTransaccionAnulada");   
  }

}
