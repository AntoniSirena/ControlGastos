import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Url } from 'src/app/global/constante/url';



@Injectable({
  providedIn: 'root'
})
export class PeriodosService {

  private url = new Url();

  constructor( private httpClient: HttpClient ) { }


  obtenerPeriodoService():Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/Periodo/GetAll`);   
  }

  obtenerPeriodoByIdService(identificador):Observable<any> {
    return this.httpClient.get(`${this.url.url}Api/Periodo/GetById/` + identificador);   
  }


  agregarPeriodoService(periodo: any){
    let Json = JSON.stringify(periodo);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(`${this.url.url}Api/Periodo/Create`, Json, {headers: headers} );
  }

  actualizarPeriodoService(periodo: any){
    let Json = JSON.stringify(periodo);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put(`${this.url.url}Api/Periodo/Update`, Json, {headers: headers} );
  }

  eliminarPeriodoService(identificador):Observable<any> {
    return this.httpClient.delete(`${this.url.url}Api/Periodo/Delete/` + identificador)
  }

}
