import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Url } from "src/app/global/constante/url";


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private url = new Url();

  constructor(private httpClient: HttpClient) { 

  }


  obtenerPersonasService():Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/Persona/GetAll`);   
  }

  obtenerPersonaByIdService(identificador):Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/Persona/GetById/` + identificador);   
  }

  obtenerTiposPersonasService():Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/Persona/GetTiposPersonas`); 
  }

  agregarPersonaService(persona: any){
    let Json = JSON.stringify(persona);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(`${this.url.url}Api/Persona/Create`, Json, {headers: headers} );
  }

  actualizarPersonaService(persona: any){
    let Json = JSON.stringify(persona);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put(`${this.url.url}Api/Persona/Update`, Json, {headers: headers} );
  }

  eliminarPersonaService(identificador):Observable<any> {
    return this.httpClient.delete(`${this.url.url}Api/Persona/Delete/` + identificador)
  }


}
