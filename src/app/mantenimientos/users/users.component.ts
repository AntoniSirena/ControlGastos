import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/servicios/users/users.service';

declare var $;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor( private httpClient: HttpClient, private usersService: UsersService) { }

  //Variable globales
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  personas: any[] = [];
  users : any[] = [];
  user: any = {Id:'', PersonaId:'' ,NombreUsuario:'', Password: '', Email: ''};


  ngOnInit() {

    this.obtenerPersonas();

    //Bloque para renderisar el DataTable en el html
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      processing: true
    };

    this.usersService.obtenerUsersService().subscribe(data => {
      this.users = data;
      this.dtTrigger.next();
    });
    
    //Sentencia para deshabilitar el boton actualizar cuando cargue el sistema
    $('#actualizarUser').attr('disabled', true);

  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }



  //obtener Personas
 obtenerPersonas(){ 
  this.usersService.obtenerPersonasService().subscribe(resultado => {
        this.personas = resultado;
      },       
      error => { console.log(JSON.stringify(error));
      });   
  }
  
 //Agregar
 agregarUser(){ 
  this.usersService.agregarUserService(this.user).subscribe(resultado => {
      this.reset();
      },       
      error => { console.log(JSON.stringify(error));
      });   
  }
  
//Actualizar
 actualizarUser(){
  this.usersService.actualizarUserService(this.user).subscribe(resultado => {
    this.reset();

    //Sentencia para habilitar el boton Agregar al hacer clic en el boton actualizar
   $('#agregarUser').attr('disabled', false);

   //Sentencia para deshabilitar el boton Actualizar al hacer clic en el boton actualizar
   $('#actualizarUser').attr('disabled', true);
    },
    error => { console.log(JSON.stringify(error));
    });  
}

//Editar
  editarUser(identificador){
    this.usersService.obtenerUserByIdService(identificador).subscribe(data => {
      this.user.Id = data[0].Id;
      this.user.PersonaId = data[0].PersonaId;
      this.user.NombreUsuario = data[0].NombreUsuario;
      this.user.Password = data[0].Password;
      this.user.Email = data[0].Email;

   //Sentencia para deshabilitar el boton Agregar al hacer clic en el boton editar
   $('#agregarUser').attr('disabled', true);

   //Sentencia para habilitar el boton Actualizar al hacer clic en el boton editar
   $('#actualizarUser').attr('disabled', false);

    },
    error => { console.log(JSON.stringify(error));
    });
  
    }


//Eliminar
eliminarUser(identificador){
  this.usersService.eliminarUserService(identificador).subscribe(data => {
  },
  error => { console.log(JSON.stringify(error));
  });
  
 }

//Metodo para limpiar las variables
reset()
{
  this.user.Id = '';
  this.user.PersonaId = '';
  this.user.NombreUsuario = '';
  this.user.Password = '';
  this.user.Email = '';
}


}
