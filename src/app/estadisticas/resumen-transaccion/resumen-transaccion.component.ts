import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResumenTransaccionService } from 'src/app/servicios/resumentransaccion/resumen-transaccion.service';
import { element } from '@angular/core/src/render3';

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
  periodos: any= [];

  tiposConceptos: any = [];
  tiposConceptosGastos: any = [];
  tiposConceptosIngresos: any = [];

  estadoResultados: any= [];
  resumenIngresosGastos: any = [];
  resumenIngresos: any = [];
  resumenGastos: any= [];

  sumaIngreso: Number = 0;
  sumaGasto: Number = 0;


  filtroResumenTransaccionesIngresos: any = { FechaInicial: '', FechaFinal: '', ConceptoId: '', PeriodoId: '', SemanaId: '', AreaId: ''};
  filtroResumenTransaccionesGastos: any = { FechaInicial: '', FechaFinal: '', ConceptoId: '', PeriodoId: '', SemanaId: '', AreaId: ''};
  filtroEstadoResultados: any = { FechaInicial: '', FechaFinal: '', ConceptoId: '', PeriodoId: '', SemanaId: '', AreaId: ''};

  

  ngOnInit() {
    this.obtenerResumenIngresos();
    this.obtenerResumenGastos();
    this.obtenerEstadoResultados();

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

      
        //Metodo para obtener el monto total de ingreso
        obtenerSumaIngreso(){
        this.resumenIngresos.forEach(element =>{
          this.sumaIngreso += element.Monto;
        });
        }

        //Metodo para obtener el monto total de gasto
        obtenerSumaGasto(){
          this.resumenGastos.forEach(element =>{
            this.sumaGasto += element.Monto;
          });
          }


      //Períodos
      obtenerPeríodos(){ 
        this.resumenTransaccionService.obtenerPeriodoService().subscribe(resultado => {
              this.periodos = resultado;
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

         //Metodo para obtener los ingresos
          obtenerResumenIngresos(){ 
            this.resumenTransaccionService.obtenerResumenIngresoService(this.filtroResumenTransaccionesIngresos).subscribe(resultado => {
                  this.resumenIngresos = resultado;
                  this.sumaIngreso = 0; //reseteo la variable
                  this.obtenerSumaIngreso();
                },       
                error => { console.log(JSON.stringify(error));
                });   
            }

            //Metodo para obtener los gastos
            obtenerResumenGastos(){
              this.resumenTransaccionService.obtenerResumenGastoService(this.filtroResumenTransaccionesGastos).subscribe(resultado => {
                    this.resumenGastos = resultado;
                    this.sumaGasto = 0; //reseteo la variable
                    this.obtenerSumaGasto();
                  },       
                  error => { console.log(JSON.stringify(error));
                  });   
              }

              //Metodo para obtener el estado de resultado
              obtenerEstadoResultados(){
                this.resumenTransaccionService.obtenerEstadoResultadotoService(this.filtroEstadoResultados).subscribe(resultado => {
                      this.estadoResultados = resultado.Resultado;

                      //concatenacion del arreglo ingreso con el de gasto
                      this.resumenIngresosGastos = resultado.Ingreso.concat(resultado.Gasto);                      

                      this.resumenIngresos = resultado.Ingreso;
                      this.sumaIngreso = 0; //reseteo la variable
                      this.obtenerSumaIngreso();

                      this.resumenGastos = resultado.Gasto;
                      this.sumaGasto = 0; //reseteo la variable
                      this.obtenerSumaGasto();3
                    },       
                    error => { console.log(JSON.stringify(error));
                    });   
                }

}
