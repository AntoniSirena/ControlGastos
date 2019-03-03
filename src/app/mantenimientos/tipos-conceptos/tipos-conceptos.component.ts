import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TiposConceptosService } from 'src/app/servicios/tiposConceptos/tipos-conceptos.service';

declare var $;


@Component({
  selector: 'app-tipos-conceptos',
  templateUrl: './tipos-conceptos.component.html',
  styleUrls: ['./tipos-conceptos.component.css']
})
export class TiposConceptosComponent implements OnInit, OnDestroy  {


  //Contructor
  constructor(private tiposConceptosService: TiposConceptosService, 
    private http: HttpClient) {  }


  //Variable globales
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();


  tiposConceptos: any[] = [];
  tiposConceptosGastos: any[] = [];
  tiposConceptosIngresos: any[] = [];

  tiposGastos : any[] = [];
  tiposIngresos : any[] = [];

  tipoConceptoGasto: any = {Id:'',Codigo:'' ,Descripcion:'', TipoGastoId:'', Origen:'Gasto'};

  tipoConceptoIngreso: any = {Id:'',Codigo:'' ,Descripcion:'', TipoIngresoId:'', Origen:'Ingreso'};



 //Primer metodo que se ejecuta al momento de cargar el sistema
  ngOnInit() {

    this.obtenerTiposGastos();
    this.obtenerTiposIngresos();

    //Bloque para renderisar el DataTable en el html
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      processing: true
    };

    this.tiposConceptosService.obtenerTiposConceptosService().subscribe(data => {
      this.tiposConceptos = data;
      this.asignarTiposConceptos();
      this.dtTrigger.next();
    });
    
    
    //Sentencia para deshabilitar el boton actualizar cuando cargue el sistema
    $('#actualizarTipoConcepto').attr('disabled', true);

    //Sentencia para deshabilitar el boton actualizar cuando cargue el sistema
    $('#actualizarTipoConceptoIngreso').attr('disabled', true);

  }


  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  

  //Metodo para segmentar los tipos de conceptos segun su origen
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



  //obtener Tipos de Gastos
  obtenerTiposGastos(){ 
    this.tiposConceptosService.obtenerTiposGastosService().subscribe(resultado => {
          this.tiposGastos = resultado;
        },       
        error => { console.log(JSON.stringify(error));
        });   
    }


  //obtener Tipos de Ingresos
  obtenerTiposIngresos(){ 
    this.tiposConceptosService.obtenerTiposIngresosService().subscribe(resultado => {
          this.tiposIngresos = resultado;
        },       
        error => { console.log(JSON.stringify(error));
        });   
    }


 //Agregar concepto tipo gasto
    agregarTipoConceptoGasto(){
      this.tiposConceptosService.agregarTipoConceptoService(this.tipoConceptoGasto).subscribe(resultado => {
        this.resetConceptoTipoGasto();
        },       
        error => { console.log(JSON.stringify(error));
        });
    }
    
     //Agregar concepto tipo ingreso
     agregarTipoConceptoIngreso(){
      this.tiposConceptosService.agregarTipoConceptoService(this.tipoConceptoIngreso).subscribe(resultado => {
        this.resetConceptoTiIngreso();
        },       
        error => { console.log(JSON.stringify(error));
        });
    }

  //Actualizar concepto tipo gasto
   actualizarTipoConceptoGasto(){
    this.tiposConceptosService.actualizarTipoConceptoService(this.tipoConceptoGasto).subscribe(resultado => {
      this.resetConceptoTipoGasto();

      //Sentencia para habilitar el boton Agregar al hacer clic en el boton actualizar
     $('#agregarTipoConcepto').attr('disabled', false);

     //Sentencia para deshabilitar el boton Actualizar al hacer clic en el boton actualizar
     $('#actualizarTipoConcepto').attr('disabled', true);
      },
      error => { console.log(JSON.stringify(error));
      });  
  }


    //Actualizar concepto tipo ingreso
    actualizarTipoConceptoIngreso(){
      this.tiposConceptosService.actualizarTipoConceptoService(this.tipoConceptoIngreso).subscribe(resultado => {
        this.resetConceptoTiIngreso();
  
        //Sentencia para habilitar el boton Agregar al hacer clic en el boton actualizar
       $('#agregarTipoConceptoIngreso').attr('disabled', false);
  
       //Sentencia para deshabilitar el boton Actualizar al hacer clic en el boton actualizar
       $('#actualizarTipoConceptoIngreso').attr('disabled', true);
        },
        error => { console.log(JSON.stringify(error));
        });  
    }


 //Editar concepto tipo gasto
    editarTipoConceptoGasto(identificador){
      this.tiposConceptosService.obtenerTipoConceptoByIdService(identificador).subscribe(resultado => {
        this.tipoConceptoGasto.Id = resultado[0].Id;
        this.tipoConceptoGasto.Codigo = resultado[0].Codigo;
        this.tipoConceptoGasto.Descripcion = resultado[0].Descripcion;
        this.tipoConceptoGasto.TipoGastoId = resultado[0].TipoGastoId;

     //Sentencia para deshabilitar el boton Agregar al hacer clic en el boton editar
     $('#agregarTipoConcepto').attr('disabled', true);

     //Sentencia para habilitar el boton Actualizar al hacer clic en el boton editar
     $('#actualizarTipoConcepto').attr('disabled', false);

      },
      error => { console.log(JSON.stringify(error));
      });
    
      }


      //Editar concepto tipo ingreso
    editarTipoConceptoIngreso(identificador){
      this.tiposConceptosService.obtenerTipoConceptoByIdService(identificador).subscribe(resultado => {
        this.tipoConceptoIngreso.Id = resultado[0].Id;
        this.tipoConceptoIngreso.Codigo = resultado[0].Codigo;
        this.tipoConceptoIngreso.Descripcion = resultado[0].Descripcion;
        this.tipoConceptoIngreso.TipoIngresoId = resultado[0].TipoIngresoId;

     //Sentencia para deshabilitar el boton Agregar al hacer clic en el boton editar
     $('#agregarTipoConceptoIngreso').attr('disabled', true);

     //Sentencia para habilitar el boton Actualizar al hacer clic en el boton editar
     $('#actualizarTipoConceptoIngreso').attr('disabled', false);

      },
      error => { console.log(JSON.stringify(error));
      });
    
      }


  //Eliminar
  eliminarTipoConcepto(identificador){
    this.tiposConceptosService.eliminarTipoConceptoService(identificador).subscribe(resultado => {
    },
    error => { console.log(JSON.stringify(error));
    });
    
   }

  //Metodo para limpiar las variables
  resetConceptoTipoGasto()
  {
    this.tipoConceptoGasto.Codigo = '';
    this.tipoConceptoGasto.Descripcion = '';
    this.tipoConceptoGasto.TipoGastoId = '';
  }

  resetConceptoTiIngreso()
  {
    this.tipoConceptoIngreso.Codigo = '';
    this.tipoConceptoIngreso.Descripcion = '';
    this.tipoConceptoIngreso.TipoIngresoId = '';
  }


}
