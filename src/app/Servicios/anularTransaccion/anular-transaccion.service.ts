import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnularTransaccionService {

  constructor(private httpClient: HttpClient) { }

  obtenerTransaccionByIdService(identificador):Observable<any> {
    return this.httpClient.get("http://localhost:61575/Api/Transaccion/GetById/" + identificador);   
  }

  anularTransaccionService(transaccion: any){
    let Json = JSON.stringify(transaccion);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put("http://localhost:61575/Api/Transaccion/Anular", Json, {headers: headers} );
  }

}
