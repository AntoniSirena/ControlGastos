import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TiposConceptosService {

  constructor( private httpClient: HttpClient ) {

   }


   obtenerTiposConceptosService():Observable<any> {
    return this.httpClient.get("http://localhost:61575/Api/ControlGastos/GetAll");   
  }

  obtenerTipoConceptoByIdService(identificador):Observable<any> {
    return this.httpClient.get("http://localhost:61575/Api/ControlGastos/GetById/" + identificador);   
  }

  agregarTipoConceptoService(tipoConcepto: any){
    let Json = JSON.stringify(tipoConcepto);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("http://localhost:61575/Api/ControlGastos/Create", Json, {headers: headers} );
  }

  actualizarTipoConceptoService(tipoConcepto: any){
    let Json = JSON.stringify(tipoConcepto);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put("http://localhost:61575/Api/ControlGastos/Update", Json, {headers: headers} );
  }

  eliminarTipoConceptoService(identificador):Observable<any> {
    return this.httpClient.delete("http://localhost:61575/Api/ControlGastos/Delete/" + identificador)
  }


}
