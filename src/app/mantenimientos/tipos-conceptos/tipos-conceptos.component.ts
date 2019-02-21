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
  tiposGastos : any[] = [];
  tipoConcepto: any = {Id:'',Codigo:'' ,Descripcion:'', TipoGastoId:''};


 //Primer metodo que se ejecuta al momento de cargar el sistema
  ngOnInit() {

    this.obtenerTiposGastos();

    //Bloque para renderisar el DataTable en el html
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      processing: true
    };

    this.tiposConceptosService.obtenerTiposConceptosService().subscribe(data => {
      this.tiposConceptos = data;
      this.dtTrigger.next();
    });
    
    
    //Sentencia para deshabilitar el boton actualizar cuando cargue el sistema
    $('#actualizarTipoConcepto').attr('disabled', true);

  }


  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  
  //obtener Tipos de Gastos
  obtenerTiposGastos(){ 
    this.tiposConceptosService.obtenerTiposGastosService().subscribe(resultado => {
          this.tiposGastos = resultado;
        },       
        error => { console.log(JSON.stringify(error));
        });   
    }


 //Agregar
    agregarTipoConcepto(){
      this.tiposConceptosService.agregarTipoConceptoService(this.tipoConcepto).subscribe(resultado => {
        this.reset();
        },       
        error => { console.log(JSON.stringify(error));
        });
    }
    
  //Actualizar
   actualizarTipoConcepto(){
    this.tiposConceptosService.actualizarTipoConceptoService(this.tipoConcepto).subscribe(resultado => {
      this.reset();

      //Sentencia para habilitar el boton Agregar al hacer clic en el boton actualizar
     $('#agregarTipoConcepto').attr('disabled', false);

     //Sentencia para deshabilitar el boton Actualizar al hacer clic en el boton actualizar
     $('#actualizarTipoConcepto').attr('disabled', true);
      },
      error => { console.log(JSON.stringify(error));
      });  
  }

 //Editar
    editarTipoConcepto(identificador){
      this.tiposConceptosService.obtenerTipoConceptoByIdService(identificador).subscribe(resultado => {
        this.tipoConcepto.Id = resultado[0].Id;
        this.tipoConcepto.Codigo = resultado[0].Codigo;
        this.tipoConcepto.Descripcion = resultado[0].Descripcion;
        this.tipoConcepto.TipoGastoId = resultado[0].TipoGastoId;

     //Sentencia para deshabilitar el boton Agregar al hacer clic en el boton editar
     $('#agregarTipoConcepto').attr('disabled', true);

     //Sentencia para habilitar el boton Actualizar al hacer clic en el boton editar
     $('#actualizarTipoConcepto').attr('disabled', false);

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
  reset()
  {
    this.tipoConcepto.Codigo = '';
    this.tipoConcepto.Descripcion = '';
    this.tipoConcepto.TipoGastoId = '';
  }


}
