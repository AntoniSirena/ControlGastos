import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PersonaService } from 'src/app/servicios/persona/persona.service';

declare var $;

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  constructor(private personaService: PersonaService, private http: HttpClient) { }

  
  //Variable globales
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  tiposPersonas : any[] = [];
  personas : any[] = [];
  persona: any = {
    Id:'',
    PrimerNombre:'',
    SegundoNombre:'',
    PrimerApellido:'',
    SegundoApellido:'',
    FechaNacimiento:'',
    Telefono:'',
    Direccion:'',
    TipoPersonaId:''
  };


   //Primer metodo que se ejecuta al momento de cargar el sistema
  ngOnInit() {

    this.obtenerTiposPersonas();
     
    //Bloque para renderisar el DataTable en el html
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      processing: true
    };

    this.personaService.obtenerPersonasService().subscribe(data => {
      this.personas = data;
      this.dtTrigger.next();
    });
    
    
    //Sentencia para deshabilitar el boton actualizar cuando cargue el sistema
    $('#actualizarPersona').attr('disabled', true);


  }



  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  
 
  
  //obtener Tipos de Personas
  obtenerTiposPersonas(){ 
   this.personaService.obtenerTiposPersonasService().subscribe(data => {
      this.tiposPersonas = data;
      },       
      error => { console.log(JSON.stringify(error));
      });   
   }
  
 //Agregar
 agregarPersona(){ 
  this.personaService.agregarPersonaService(this.persona).subscribe(resultado => {
      this.reset();
      },       
      error => { console.log(JSON.stringify(error));
      });   
  }
  
//Actualizar
 actualizarPersona(){
  this.personaService.actualizarPersonaService(this.persona).subscribe(resultado => {
    this.reset();

    //Sentencia para habilitar el boton Agregar al hacer clic en el boton actualizar
   $('#agregarPersona').attr('disabled', false);

   //Sentencia para deshabilitar el boton Actualizar al hacer clic en el boton actualizar
   $('#actualizarPersona').attr('disabled', true);
    },
    error => { console.log(JSON.stringify(error));
    });  
}

//Editar
  editarPersona(identificador){
    this.personaService.obtenerPersonaByIdService(identificador).subscribe(resultado => {
      this.persona.Id = resultado[0].Id;
      this.persona.PrimerNombre = resultado[0].PrimerNombre;
      this.persona.SegundoNombre = resultado[0].SegundoNombre;
      this.persona.PrimerApellido = resultado[0].PrimerApellido;
      this.persona.SegundoApellido = resultado[0].SegundoApellido;
      this.persona.FechaNacimiento = resultado[0].FechaNacimiento;
      this.persona.Telefono = resultado[0].Telefono;
      this.persona.Direccion = resultado[0].Direccion;
      this.persona.TipoPersonaId = resultado[0].TipoPersonaId;

   //Sentencia para deshabilitar el boton Agregar al hacer clic en el boton editar
   $('#agregarPersona').attr('disabled', true);

   //Sentencia para habilitar el boton Actualizar al hacer clic en el boton editar
   $('#actualizarPersona').attr('disabled', false);

    },
    error => { console.log(JSON.stringify(error));
    });
  
    }


//Eliminar
eliminarPersona(identificador){
  this.personaService.eliminarPersonaService(identificador).subscribe(resultado => {
  },
  error => { console.log(JSON.stringify(error));
  });
  
 }

//Metodo para limpiar las variables
reset()
{
  this.persona.PrimerNombre = '';
  this.persona.SegundoNombre = '';
  this.persona.PrimerApellido = '';
  this.persona.SegundoApellido = '';
  this.persona.FechaNacimiento = '';
  this.persona.Telefono = '';
  this.persona.Direccion = '';
  this.persona.TipoPersonaId = '';
}



}
