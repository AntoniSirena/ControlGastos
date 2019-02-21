import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResumenTransaccionService } from 'src/app/servicios/resumentransaccion/resumen-transaccion.service';

@Component({
  selector: 'app-resumen-transaccion',
  templateUrl: './resumen-transaccion.component.html',
  styleUrls: ['./resumen-transaccion.component.css']
})
export class ResumenTransaccionComponent implements OnInit {


  constructor( private resumenTransaccionService: ResumenTransaccionService,private httpClient: HttpClient ) {

   }

  //Variables

  resumenTransaccion: any [] = [];


  ngOnInit() {

    this.obtenerResumenTransaccion();


  }


    //obtener Personas
    obtenerResumenTransaccion(){ 
      this.resumenTransaccionService.obtenerResumenTransaccionService().subscribe(resultado => {
            this.resumenTransaccion = resultado;
          },       
          error => { console.log(JSON.stringify(error));
          });   
      }

}
