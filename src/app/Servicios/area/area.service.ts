import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Url } from 'src/app/global/constante/url';


@Injectable({
  providedIn: 'root'
})
export class AreaService {

  private url = new Url();

  constructor(private httpClient: HttpClient) {
   }


   obtenerAreasService():Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/Area/GetAll`);   
  }

  obtenerAreaByIdService(identificador):Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/Area/GetById/` + identificador);   
  }

  obtenerPersonaService():Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/Area/GetPersona`);   
  }

  agregarAreaService(area: any){
    let Json = JSON.stringify(area);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(`${this.url.url}Api/Area/Create`, Json, {headers: headers} );
  }

  actualizarAreaService(area: any){
    let Json = JSON.stringify(area);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put(`${this.url.url}Api/Area/Update`, Json, {headers: headers} );
  }

  eliminarAreaService(identificador):Observable<any> {
    return this.httpClient.delete(`${this.url.url}Api/Area/Delete/` + identificador)
  }
 

}
