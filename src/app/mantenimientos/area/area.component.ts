import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AreaService } from 'src/app/servicios/area/area.service';

declare var $;

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  constructor( private areaService: AreaService, private httpClient: HttpClient) { }


  //Variable globales
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  areas: any[] = [];
  personas : any[] = [];
  area: any = {Id:'', Codigo:'' ,Descripcion:'', PersonaId: ''};
  valor: boolean = false;



  ngOnInit() {

    this.obtenerPersonas();

    //Bloque para renderisar el DataTable en el html
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 12,
      processing: true
    };

    this.areaService.obtenerAreasService().subscribe(data => {
      this.areas = data;
      this.dtTrigger.next();
      this.ngOnDestroy();
    });

  }

  //Metodo para destruir y reinicializar el dataTable
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    $('#datatable').dataTable().fnDestroy();
  }



 //obtener Personas
 obtenerPersonas(){ 
  this.areaService.obtenerPersonaService().subscribe(resultado => {
        this.personas = resultado;
      },       
      error => { console.log(JSON.stringify(error));
      });   
  }
  
 //Agregar
 agregarArea(){ 
  this.areaService.agregarAreaService(this.area).subscribe(resultado => {
      this.reset();
      this.ngOnInit();
      },       
      error => { console.log(JSON.stringify(error));
      });   
  }
  
//Actualizar
 actualizarArea(){
  this.areaService.actualizarAreaService(this.area).subscribe(resultado => {
    //valor para eleminar el boton actualizar del Dom
    this.valor = false;
    this.reset();
    this.ngOnInit();
    },
    error => { console.log(JSON.stringify(error));
    });  
}

//Editar
  editarArea(identificador){
    this.areaService.obtenerAreaByIdService(identificador).subscribe(resultado => {
      this.area.Id = resultado[0].Id;
      this.area.Codigo = resultado[0].Codigo;
      this.area.Descripcion = resultado[0].Descripcion;
      this.area.PersonaId = resultado[0].PersonaId;

      //valor para eleminar el boton agregar del Dom
      this.valor = true;

    },
    error => { console.log(JSON.stringify(error));
    });
  
    }


//Eliminar
eliminarArea(identificador){
  this.areaService.eliminarAreaService(identificador).subscribe(resultado => {
    this.ngOnInit();
  },
  error => { console.log(JSON.stringify(error));
  });
  
 }

//Metodo para limpiar las variables
reset()
{
  this.area.Codigo = '';
  this.area.Descripcion = '';
  this.area.PersonaId = '';
}



}
