import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private httpClient: HttpClient) { 

  }


  obtenerPersonasService():Observable<any> {
    return this.httpClient.get("http://localhost:61575/Api/Persona/GetAll");   
  }

  obtenerPersonaByIdService(identificador):Observable<any> {
    return this.httpClient.get("http://localhost:61575/Api/Persona/GetById/" + identificador);   
  }

  agregarPersonaService(persona: any){
    let Json = JSON.stringify(persona);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("http://localhost:61575/Api/Persona/Create", Json, {headers: headers} );
  }

  actualizarPersonaService(persona: any){
    let Json = JSON.stringify(persona);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put("http://localhost:61575/Api/Persona/Update", Json, {headers: headers} );
  }

  eliminarPersonaService(identificador):Observable<any> {
    return this.httpClient.delete("http://localhost:61575/Api/Persona/Delete/" + identificador)
  }


}
