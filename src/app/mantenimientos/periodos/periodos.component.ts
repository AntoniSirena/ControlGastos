import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PeriodosService } from 'src/app/servicios/periodos/periodos.service';
import { FormsModule } from '@angular/forms';


declare var $;

@Component({
  selector: 'app-periodos',
  templateUrl: './periodos.component.html',
  styleUrls: ['./periodos.component.css']
})
export class PeriodosComponent implements OnInit {

  constructor( private periodosService: PeriodosService, httpClient: HttpClient) { }


    //Variable globales
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();
  
    periodos : any[] = [];
    periodo: any = {Id:'', Codigo:'', Descripcion:'', FechaApertura: '', FechaCierre: ''};

    
  ngOnInit() {

   // this.obtenerPeriodo();

    //Bloque para renderisar el DataTable en el html
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      processing: true
    };

    this.periodosService.obtenerPeriodoService().subscribe(data => {
      this.periodos = data;
      this.dtTrigger.next();
    });
    
    
    //Sentencia para deshabilitar el boton actualizar cuando cargue el sistema
    $('#actualizarPeriodo').attr('disabled', true)

  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

 
  
 //Agregar
 agregarPeriodo(){ 
  this.periodosService.agregarPeriodoService(this.periodo).subscribe(resultado => {
      this.reset();
      },       
      error => { console.log(JSON.stringify(error));
      });   
  }
  
//Actualizar
 actualizarPeriodo(){
  this.periodosService.actualizarPeriodoService(this.periodo).subscribe(resultado => {
    this.reset();

    //Sentencia para habilitar el boton Agregar al hacer clic en el boton actualizar
   $('#agregarPeriodo').attr('disabled', false);

   //Sentencia para deshabilitar el boton Actualizar al hacer clic en el boton actualizar
   $('#actualizarPeriodo').attr('disabled', true);
    },
    error => { console.log(JSON.stringify(error));
    });  
}

//Editar
  editarPeriodo(identificador){
    this.periodosService.obtenerPeriodoByIdService(identificador).subscribe(resultado => {
      this.periodo.Id = resultado[0].Id;
      this.periodo.Codigo = resultado[0].Codigo;
      this.periodo.Descripcion = resultado[0].Descripcion;
      this.periodo.FechaApertura = resultado[0].FechaApertura;
      this.periodo.FechaCierre = resultado[0].FechaCierre;

   //Sentencia para deshabilitar el boton Agregar al hacer clic en el boton editar
   $('#agregarPeriodo').attr('disabled', true);

   //Sentencia para habilitar el boton Actualizar al hacer clic en el boton editar
   $('#actualizarPeriodo').attr('disabled', false);

    },
    error => { console.log(JSON.stringify(error));
    });
  
    }


//Eliminar
eliminarPeriodo(identificador){
  this.periodosService.eliminarPeriodoService(identificador).subscribe(resultado => {
  },
  error => { console.log(JSON.stringify(error));
  });
  
 }

//Metodo para limpiar las variables
reset()
{
  this.periodo.Codigo = '';
  this.periodo.Descripcion = '';
  this.periodo.FechaApertura = '';
  this.periodo.FechaCierre = '';

}


  

}
