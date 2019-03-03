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

  razones: any[] = [];
  razon: any = {Id:'', Codigo:'' ,Descripcion:''};

 

  ngOnInit() {

    
    //Bloque para renderisar el DataTable en el html
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      processing: true
    };

    this.razonesAnulacionTransaccionService.obtenerRazonesService().subscribe(data => {
      this.razones = data;
      this.dtTrigger.next();
    });
    
    //Sentencia para deshabilitar el boton actualizar cuando cargue el sistema
    $('#actualizarRazon').attr('disabled', true);

  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


  
 //Agregar
 agregarRazon(){ 
  this.razonesAnulacionTransaccionService.agregarRazonService(this.razon).subscribe(resultado => {
      this.reset();
      },       
      error => { console.log(JSON.stringify(error));
      });   
  }

  
//Actualizar
 actualizarRazon(){
  this.razonesAnulacionTransaccionService.actualizarRazonService(this.razon).subscribe(resultado => {
    this.reset();

    //Sentencia para habilitar el boton Agregar al hacer clic en el boton actualizar
   $('#agregarRazon').attr('disabled', false);

   //Sentencia para deshabilitar el boton Actualizar al hacer clic en el boton actualizar
   $('#actualizarRazon').attr('disabled', true);
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

 //Sentencia para deshabilitar el boton Agregar al hacer clic en el boton editar
 $('#agregarRazon').attr('disabled', true);

 //Sentencia para habilitar el boton Actualizar al hacer clic en el boton editar
 $('#actualizarRazon').attr('disabled', false);

  },
  error => { console.log(JSON.stringify(error));
  });

  }


  //Eliminar
eliminarRazon(identificador){
  this.razonesAnulacionTransaccionService.eliminarRazonService(identificador).subscribe(resultado => {
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
