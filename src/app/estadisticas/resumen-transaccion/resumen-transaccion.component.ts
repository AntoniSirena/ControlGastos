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


  constructor( private resumenTransaccionService: ResumenTransaccionService, private httpClient: HttpClient ) {

   }

  //Variables
  semanas: any = [];
  areas: any= [];
  períodos: any= [];

  tiposConceptos: any = [];
  tiposConceptosGastos: any = [];
  tiposConceptosIngresos: any = [];

  resumenIngresos: any = [];
  resumenGastos: any= [];

  resumen: any = { FechaInicial: '', FechaFinal: '', ConceptoId: '', PeriodoId: '', SemanaId: '', AreaId: ''};

  ngOnInit() {

    this.obtenerResumenIngresos(this.resumen);
    this.obtenerResumenGastos(this.resumen);

    this.obtenerTiposConceptos();
    this.obtenerPeríodos();
    this.obtenerSemans();
    this.obtenerAreas();

    
  }



     //Metodo para obtener los Tipos de Conceptos
     obtenerTiposConceptos(){ 
      this.resumenTransaccionService.obtenerTiposConceptoService().subscribe(resultado => {
            this.tiposConceptos = resultado;
            this.asignarTiposConceptos();
         
          },       
          error => { console.log(JSON.stringify(error));
          });   
      }

      //Metodo para segmentar los tipos de conceptos según su origen
      asignarTiposConceptos(){
        this.tiposConceptos.forEach(element => {
          if(element.Origen == "Gasto"){
          this.tiposConceptosGastos.push(element);
          }
    
          if(element.Origen == "Ingreso"){
          this.tiposConceptosIngresos.push(element);
          } 
        }); 
    
        }


      //Períodos
      obtenerPeríodos(){ 
        this.resumenTransaccionService.obtenerPeriodoService().subscribe(resultado => {
              this.períodos = resultado;
            },       
            error => { console.log(JSON.stringify(error));
            });   
        }


      //Semanas
      obtenerSemans(){ 
        this.resumenTransaccionService.obtenerSemanaService().subscribe(resultado => {
              this.semanas = resultado;
            },       
            error => { console.log(JSON.stringify(error));
            });   
        }

        //Areas
        obtenerAreas(){ 
          this.resumenTransaccionService.obtenerAreaService().subscribe(resultado => {
                this.areas = resultado;
              },       
              error => { console.log(JSON.stringify(error));
              });   
          }

          obtenerResumenIngresos(resumen){ 
            this.resumenTransaccionService.obtenerResumenIngresoService(resumen).subscribe(resultado => {
                  this.resumenIngresos = resultado;
                },       
                error => { console.log(JSON.stringify(error));
                });   
            }

            obtenerResumenGastos(resumen){ 
              this.resumenTransaccionService.obtenerResumenGastoService(resumen).subscribe(resultado => {
                    this.resumenGastos = resultado;
                  },       
                  error => { console.log(JSON.stringify(error));
                  });   
              }

}
