import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PeriodosService } from 'src/app/servicios/periodos/periodos.service';
import { ThrowStmt } from '@angular/compiler';


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
    valor: boolean = false;
  
    periodos : any[] = [];
    periodo: any = {Id:'', Codigo:'', Descripcion:'', FechaApertura: '', FechaCierre: ''};

    
  ngOnInit() {

    //Bloque para renderisar el DataTable en el html
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 12,
      processing: true
    };

    this.periodosService.obtenerPeriodoService().subscribe(data => {
      this.periodos = data;
      this.dtTrigger.next();
      this.ngOnDestroy();
    });

  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    $('#datatable').dataTable().fnDestroy();
  }

  
 //Agregar
 agregarPeriodo(){ 
  this.periodosService.agregarPeriodoService(this.periodo).subscribe(resultado => {
      this.reset();
      this.ngOnInit();  
      },
      error => { console.log(JSON.stringify(error));
      });   
  }
  
//Actualizar
 actualizarPeriodo(){
  this.periodosService.actualizarPeriodoService(this.periodo).subscribe(resultado => {
    this.reset();
    //valor para eleminar el boton actalizar del Dom
    this.valor = false;
    this.ngOnInit();
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

      //valor para eleminar el boton agregar del Dom
      this.valor = true;

    },
    error => { console.log(JSON.stringify(error));
    });
  
    }


//Eliminar
eliminarPeriodo(identificador){
  this.periodosService.eliminarPeriodoService(identificador).subscribe(resultado => {
    this.ngOnInit();
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
