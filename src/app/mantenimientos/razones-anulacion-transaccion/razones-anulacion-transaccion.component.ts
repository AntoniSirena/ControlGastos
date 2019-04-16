import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RazonesAnulacionTransaccionService } from 'src/app/servicios/razonesAnulacionTransaccion/razones-Anulacion-Transaccion.service';

declare var $;


@Component({
  selector: 'app-razones-anulacion-transaccion',
  templateUrl: './razones-anulacion-transaccion.component.html',
  styleUrls: ['./razones-anulacion-transaccion.component.css']
})
export class RazonesAnulacionTransaccionComponent implements OnInit {

  constructor(private httpClient: HttpClient, private razonesAnulacionTransaccionService: RazonesAnulacionTransaccionService) { }

  
  //Variable globales
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  valor: boolean = false;

  razones: any[] = [];
  razon: any = {Id:'', Codigo:'' ,Descripcion:''};

 

  ngOnInit() {
  
    //Bloque para renderisar el DataTable en el html
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 9,
      processing: true
    };

    this.razonesAnulacionTransaccionService.obtenerRazonesService().subscribe(data => {
      this.razones = data;
      this.dtTrigger.next();
      this.ngOnDestroy();
    });

  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    $('#datatable').dataTable().fnDestroy();
  }

  
 //Agregar
 agregarRazon(){ 
  this.razonesAnulacionTransaccionService.agregarRazonService(this.razon).subscribe(resultado => {
      this.reset();
      this.ngOnInit();
      },       
      error => { console.log(JSON.stringify(error));
      });   
  }

  
//Actualizar
 actualizarRazon(){
  this.razonesAnulacionTransaccionService.actualizarRazonService(this.razon).subscribe(resultado => {
    this.reset();
    this.ngOnInit();
    //valor para eleminar el boton actualizar del Dom
    this.valor = false;
    },
    error => { console.log(JSON.stringify(error));
    });  
}


//Editar
editarRazon(identificador){
  this.razonesAnulacionTransaccionService.obtenerRazonByIdService(identificador).subscribe(resultado => {
    this.razon.Id = resultado[0].Id;
    this.razon.Codigo = resultado[0].Codigo;
    this.razon.Descripcion = resultado[0].Descripcion;

    //valor para eleminar el boton agregar del Dom
    this.valor = true;

  },
  error => { console.log(JSON.stringify(error));
  });

  }


  //Eliminar
eliminarRazon(identificador){
  this.razonesAnulacionTransaccionService.eliminarRazonService(identificador).subscribe(resultado => {
    this.ngOnInit();
  },
  error => { console.log(JSON.stringify(error));
  });
  
 }


  //Metodo para limpiar las variables
reset()
{
  this.razon.Codigo = '';
  this.razon.Descripcion = '';
}

}
