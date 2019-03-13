import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Url } from 'src/app/global/constante/url';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = new Url();

  constructor(private httpClient: HttpClient) { }


  obtenerUsersService():Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/User/GetAll`);   
  }

  obtenerUserByIdService(identificador):Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/User/GetById/` + identificador);   
  }

  obtenerPersonasService():Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/User/GetPersonas`);   
  }


  agregarUserService(user: any){
    let Json = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(`${this.url.url}Api/User/Create`, Json, {headers: headers} );
  }

  actualizarUserService(user: any){
    let Json = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put(`${this.url.url}Api/User/Update`, Json, {headers: headers} );
  }

  eliminarUserService(identificador):Observable<any> {
    return this.httpClient.delete(`${this.url.url}Api/User/Delete/` + identificador)
  }

}
