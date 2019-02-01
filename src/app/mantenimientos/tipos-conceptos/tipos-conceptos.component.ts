import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';
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

  constructor(private tiposConceptosService: TiposConceptosService, private http: HttpClient) {   }


  //Variable globales
  tiposConceptos: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  tipoConcepto: any = {Codigo:'' ,Descripcion:'', Id:''};



 //Primer metodo que se ejecuta al momento de cargar el sistema
  ngOnInit() {

    //Bloque para renderisar el DataTable en el html
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
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
  


  
 //Agregar
    agregarTipoConcepto(){ 
    this.tiposConceptosService.agregarTipoConceptoService(this.tipoConcepto).subscribe(resultado => {
        this.reset();
        $('#datatable').DataTable().draw(); //Llamada al DataTable para refrescarlo
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

 //EditarTipoPersonas
    editarTipoConcepto(identificador){
      this.tiposConceptosService.obtenerTipoConceptoByIdService(identificador).subscribe(resultado => {
        this.tipoConcepto.Id = resultado[0].Id;
        this.tipoConcepto.Codigo = resultado[0].Codigo;
        this.tipoConcepto.Descripcion = resultado[0].Descripcion;

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
  }


}
