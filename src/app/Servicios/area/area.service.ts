import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private httpClient: HttpClient) {

   }


   obtenerAreasService():Observable<any> {
    return this.httpClient.get("http://localhost:61575/Api/Area/GetAll");   
  }

  obtenerAreaByIdService(identificador):Observable<any> {
    return this.httpClient.get("http://localhost:61575/Api/Area/GetById/" + identificador);   
  }

  obtenerPersonaService():Observable<any> {
    return this.httpClient.get("http://localhost:61575/Api/Area/GetPersona");   
  }

  agregarAreaService(area: any){
    let Json = JSON.stringify(area);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("http://localhost:61575/Api/Area/Create", Json, {headers: headers} );
  }

  actualizarAreaService(area: any){
    let Json = JSON.stringify(area);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put("http://localhost:61575/Api/Area/Update", Json, {headers: headers} );
  }

  eliminarAreaService(identificador):Observable<any> {
    return this.httpClient.delete("http://localhost:61575/Api/Area/Delete/" + identificador)
  }
 

}
