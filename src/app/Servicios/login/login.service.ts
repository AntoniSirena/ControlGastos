import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Url } from 'src/app/global/constante/url';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = new Url();

  constructor(private httpClient: HttpClient) { }

  validarService(user: any):Observable<any> {
    let Json = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(`${this.url.url}Api/Login/Validar`, Json, {headers: headers} );
  }

}
