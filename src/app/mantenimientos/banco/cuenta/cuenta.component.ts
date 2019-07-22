import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CuentaService } from 'src/app/servicios/banco/cuenta/cuenta.service';

declare var $;

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {

  constructor(private httpClient: HttpClient, private cuentaService: CuentaService) { }

    //Variable globales
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();
  
    cuentas: any[] = [];
    tiposCuentas: any[] = [];
    bancos: any[] = [];

    cuenta: any = {Id:'', NumeroCuenta:'', TipoCuentaId: '', BancoId:''};
    valor: boolean = false;


    ngOnInit() {
           //Bloque para renderisar el DataTable en el html
            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 12,
              processing: true
            };
        
            this.cuentaService.obtenerCuentaService().subscribe(data => {
              this.cuentas = data;
              this.dtTrigger.next();
              this.ngOnDestroy();
            });

            this.obtenerTiposCuentas();
            this.obtenerBancos();
   }


  //Metodo para destruir y reinicializar el dataTable
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    $('#datatable').dataTable().fnDestroy();
  }

 //obtener tipos de cuentas
 obtenerTiposCuentas(){ 
  this.cuentaService.obtenerTipoCuentaService().subscribe(resultado => {
        this.tiposCuentas = resultado;
      },       
      error => { console.log(JSON.stringify(error));
      });   
  }

  //obtener bancos
 obtenerBancos(){ 
  this.cuentaService.obtenerBancoService().subscribe(resultado => {
        this.bancos = resultado;
      },       
      error => { console.log(JSON.stringify(error));
      });   
  }

   //Agregar
 agregar(){ 
  this.cuentaService.agregarCuentaService(this.cuenta).subscribe(resultado => {
      this.reset();
      this.ngOnInit();
      },       
      error => { console.log(JSON.stringify(error));
      });   
  }
    
  //Actualizar
  actualizar(){
    this.cuentaService.actualizarCuentaService(this.cuenta).subscribe(resultado => {
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
      this.cuentaService.obtenerCuentaByIdService(identificador).subscribe(resultado => {
        this.cuenta.Id = resultado[0].Id;
        this.cuenta.NumeroCuenta = resultado[0].NumeroCuenta;
        this.cuenta.TipoCuentaId = resultado[0].TipoCuentaId;
        this.cuenta.BancoId = resultado[0].BancoId;

        //valor para eleminar el boton agregar del Dom
        this.valor = true;

      },
      error => { console.log(JSON.stringify(error));
      });
    
      }


  //Eliminar
  eliminar(identificador){
    this.cuentaService.eliminarCuentaService(identificador).subscribe(resultado => {
      this.ngOnInit();
    },
    error => { console.log(JSON.stringify(error));
    });
    
  }

  //Metodo para limpiar las variables
  reset()
  {
    this.cuenta.Id = '';
    this.cuenta.NumeroCuenta = '';
    this.cuenta.TipoCuentaId = '';
    this.cuenta.BancoId = '';
  }


}
