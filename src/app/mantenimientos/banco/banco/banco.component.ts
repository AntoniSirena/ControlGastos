import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BancoService } from 'src/app/servicios/banco/banco/banco.service';

declare var $;

@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css']
})
export class BancoComponent implements OnInit {

  constructor(private httpClient: HttpClient, private bancoService: BancoService) { }

    //Variable globales
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();
  
    bancos: any[] = [];
    banco: any = {Id:'', Codigo:'', Sigla: '', Nombre:''};
    valor: boolean = false;
  

  ngOnInit() {

        //Bloque para renderisar el DataTable en el html
        this.dtOptions = {
          pagingType: 'full_numbers',
          pageLength: 12,
          processing: true
        };
    
        this.bancoService.obtenerBancoService().subscribe(data => {
          this.bancos = data;
          this.dtTrigger.next();
          this.ngOnDestroy();
        });  
  }

    //Metodo para destruir y reinicializar el dataTable
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    $('#datatable').dataTable().fnDestroy();
  }

  //Agregar
 agregar(){ 
  this.bancoService.agregarBancoService(this.banco).subscribe(resultado => {
      this.reset();
      this.ngOnInit();
      },       
      error => { console.log(JSON.stringify(error));
      });   
  }
    
  //Actualizar
  actualizar(){
    this.bancoService.actualizarBancoService(this.banco).subscribe(resultado => {
      //valor para eleminar el boton actualizar del Dom
      this.valor = false;
      this.reset();
      this.ngOnInit();
      },
      error => { console.log(JSON.stringify(error));
      });  
  }

  //Editar
    editar(identificador){
      this.bancoService.obtenerBancoByIdService(identificador).subscribe(resultado => {
        this.banco.Id = resultado[0].Id;
        this.banco.Codigo = resultado[0].Codigo;
        this.banco.Sigla = resultado[0].Sigla;
        this.banco.Nombre = resultado[0].Nombre;

        //valor para eleminar el boton agregar del Dom
        this.valor = true;

      },
      error => { console.log(JSON.stringify(error));
      });
    
      }


  //Eliminar
  eliminar(identificador){
    this.bancoService.eliminarBancoService (identificador).subscribe(resultado => {
      this.ngOnInit();
    },
    error => { console.log(JSON.stringify(error));
    });
    
  }

  //Metodo para limpiar las variables
  reset()
  {
    this.banco.Codigo = '';
    this.banco.Codigo = '';
    this.banco.Sigla = '';
    this.banco.Nombre = '';
  }
    
}
