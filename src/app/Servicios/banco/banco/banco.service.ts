import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Url } from 'src/app/global/constante/url';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  private url = new Url();

  constructor(private httpClient: HttpClient) { }

  obtenerBancoService():Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/Banco/GetAll`);   
  }

  obtenerBancoByIdService(identificador):Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/Banco/GetById/` + identificador);   
  }

  agregarBancoService(banc_Banco: any){
    let Json = JSON.stringify(banc_Banco);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(`${this.url.url}Api/Banco/Create`, Json, {headers: headers} );
  }

  actualizarBancoService(banc_Banco: any){
    let Json = JSON.stringify(banc_Banco);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put(`${this.url.url}Api/Banco/Update`, Json, {headers: headers} );
  }

  eliminarBancoService(identificador):Observable<any> {
    return this.httpClient.delete(`${this.url.url}Api/Banco/Delete/` + identificador)
  }
 

}
