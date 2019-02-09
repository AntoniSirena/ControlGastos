import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  constructor(private httpClient: HttpClient ) { }


  obtenerGastoService():Observable<any> {
    return this.httpClient.get("http://localhost:61575/Api/Transaccion/GetAll");   
  }


  obtenerTiposConceptoService():Observable<any> {
    return this.httpClient.get("http://localhost:61575/Api/Transaccion/GetTioposConceptos");   
  }

  obtenerSemanaService():Observable<any> {
    return this.httpClient.get("http://localhost:61575/Api/Transaccion/GetSemanas");   
  }


  obtenerAreaService():Observable<any> {
    return this.httpClient.get("http://localhost:61575/Api/Transaccion/GetAreas");   
  }


  agregarTransaccionGastoService(gasto: any){
    let Json = JSON.stringify(gasto);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("http://localhost:61575/Api/Transaccion/Create", Json, {headers: headers} );
  }


}

