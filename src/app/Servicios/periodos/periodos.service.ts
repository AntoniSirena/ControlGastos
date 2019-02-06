import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PeriodosService {

  constructor( private httpClient: HttpClient ) { }


  obtenerPeriodoService():Observable<any> {
    return this.httpClient.get("http://localhost:61575/Api/Periodo/GetAll");   
  }

  obtenerPeriodoByIdService(identificador):Observable<any> {
    return this.httpClient.get("http://localhost:61575/Api/Periodo/GetById/" + identificador);   
  }


  agregarPeriodoService(periodo: any){
    let Json = JSON.stringify(periodo);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("http://localhost:61575/Api/Periodo/Create", Json, {headers: headers} );
  }

  actualizarPeriodoService(periodo: any){
    let Json = JSON.stringify(periodo);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put("http://localhost:61575/Api/Periodo/Update", Json, {headers: headers} );
  }

  eliminarPeriodoService(identificador):Observable<any> {
    return this.httpClient.delete("http://localhost:61575/Api/Periodo/Delete/" + identificador)
  }

}
