
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { TransaccionService } from 'src/app/servicios/transaccion/transaccion.service';



@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent implements OnInit {

  constructor( private transaccionService: TransaccionService, private http: HttpClient) { }


  //Variable globales
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  tiposConceptos: any[] = [];
  tiposConceptosGastos: any[] = [];
  tiposConceptosIngresos: any[] = [];

  semanas: any[] = [];
  areas: any[] = [];

  transacciones : any[] = [];
  gastos : any[] = [];
  ingresos : any[] = [];



  gasto: any = {
  Id: '', 
  ConceptoId: '', 
  SemanaId: '', AreaId: '',
  Monto: '', 
  FechaCreacion: '', 
  Comentario: '', 
  Referencia: '', 
  Origen: 'Gasto' 
  };

  ingreso: any = {
    Id: '', 
    ConceptoId: '', 
    SemanaId: '', AreaId: '',
    Monto: '', 
    FechaCreacion: '', 
    Comentario: '', 
    Referencia: '', 
    Origen: 'Ingreso' 
    };


  //Metodo para segmentar las transacciones según su origen
   asignarTransacciones(){
   this.transacciones.forEach(element => {
     if(element.Origen == "Gasto"){
     this.gastos.push(element);
     }

     if(element.Origen == "Ingreso"){
      this.ingresos.push(element);
      } 
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


   //Primer metodo que se ejecuta al momento de cargar el sistema
  ngOnInit() {
  
   this.obtenerTiposConceptos();
   this.obtenerSemans();
   this.obtenerAreas();

    //Bloque para renderisar el DataTable en el html
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };

    this.transaccionService.obtenerTransaccionesService().subscribe(data  => {
      this.transacciones = data;
      this.asignarTransacciones();
      this.asignarTiposConceptos();
      this.dtTrigger.next();
    });

  }


  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  

 //Agregar Transaccion tipo Gasto
    agregarTransaccionGasto(){ 
    this.transaccionService.agregarTransaccionGastoService(this.gasto).subscribe(resultado => {
        this.resetGasto();
        },       
        error => { console.log(JSON.stringify(error));
        });   
    }


    //Agregar Transaccion tipo Ingreso
    agregarTransaccionIngreso(){ 
      this.transaccionService.agregarTransaccionGastoService(this.ingreso).subscribe(resultado => {
          this.resetIngreso();
          },       
          error => { console.log(JSON.stringify(error));
          });   
      }


    //TiposConceptos
    obtenerTiposConceptos(){ 
      this.transaccionService.obtenerTiposConceptoService().subscribe(resultado => {
            this.tiposConceptos = resultado;
          },       
          error => { console.log(JSON.stringify(error));
          });   
      }

      //Semanas
      obtenerSemans(){ 
        this.transaccionService.obtenerSemanaService().subscribe(resultado => {
              this.semanas = resultado;
            },       
            error => { console.log(JSON.stringify(error));
            });   
        }

        //Areas
        obtenerAreas(){ 
          this.transaccionService.obtenerAreaService().subscribe(resultado => {
                this.areas = resultado;
              },       
              error => { console.log(JSON.stringify(error));
              });   
          }


     //Metodo para limpiar las variables
      resetGasto()
      {
        this.gasto.Id = '';
        this.gasto.ConceptoId = '';
        this.gasto.SemanaId = '';
        this.gasto.AreaId = '';
        this.gasto.Monto = '';
        this.gasto.FechaCreacion = '';
        this.gasto.Comentario = '';
        this.gasto.Referencia = '';
      }

       //Metodo para limpiar las variables
       resetIngreso()
       {
         this.ingreso.Id = '';
         this.ingreso.ConceptoId = '';
         this.ingreso.SemanaId = '';
         this.ingreso.AreaId = '';
         this.ingreso.Monto = '';
         this.ingreso.FechaCreacion = '';
         this.ingreso.Comentario = '';
         this.ingreso.Referencia = '';
       }


}
