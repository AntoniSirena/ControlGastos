import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { TransaccionBancoService } from 'src/app/servicios/banco/transaccionBanco/transaccion-banco.service';

@Component({
  selector: 'app-transaccion-banco',
  templateUrl: './transaccion-banco.component.html',
  styleUrls: ['./transaccion-banco.component.css']
})
export class TransaccionBancoComponent implements OnInit {

  constructor(private transaccionBancoService: TransaccionBancoService, private http: HttpClient) { }


  //Variable globales
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  transacciones: any[] = [];
  depositos: any[] = [];
  retiros: any[] = [];
  trasferencias: any[] = [];
  ajustes: any[] = [];

  tiposTransaccion: any[] = [];
  razonesAjustes: any[] = [];
  bancos: any[] = [];
  cuentasOrigen: any[] = [];
  cuentasDestino: any[] = [];

  transaccion: any = {
    Id:'', Monto: '', TipoTransaccionId: '', BancoOrigenId: '', CuentaOrigenId: '', RazonAjusteId: '', 
    BancoDestinoId: '', CuentaDestinoId: '', Nota: ''
  };

  //Metodo para segmentar las transacciones según su origen
  asignarTransacciones(){
  this.transacciones.forEach(element => {
    if(element.Origen == "Deposito"){
    this.depositos.push(element);
    }
   
    if(element.Origen == "Retiro"){
    this.retiros.push(element);
    }

    if(element.Origen == "Transferencia"){
    this.trasferencias.push(element);
    }

    if(element.Origen == "Ajuste"){
    this.ajustes.push(element);
    }

    }); 
   
  }


  ngOnInit() {

    //Bloque para renderisar el DataTable en el html
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };

    this.transaccionBancoService.obtenerTransaccionesService().subscribe(data  => {
      this.transacciones = data;
      this.asignarTransacciones();
      this.dtTrigger.next();
    });

    this.obtenerTiposTransaccion();
    this.obtenerBancos();
    this.obtenerRazonesAjustes();

  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


   //Tipos de transacion
   obtenerTiposTransaccion(){ 
    this.transaccionBancoService.obtenerTiposTransaccionService().subscribe(resultado => {
      this.tiposTransaccion = resultado;
      },       
      error => { console.log(JSON.stringify(error));
      });   
    }

    //Bancos
   obtenerBancos(){ 
    this.transaccionBancoService.obtenerBancoService().subscribe(resultado => {
      this.bancos = resultado;
      },       
      error => { console.log(JSON.stringify(error));
      });   
    }

    //Obtener cuenta origen por bancoId
   obtenerCuentaOrigen(identificador){
    this.transaccionBancoService.obtenerCuentaByBancoIdService(identificador).subscribe(resultado => {
     this.cuentasOrigen = resultado;
    },
    error => { console.log(JSON.stringify(error));
    });
    }

    //Obtener cuenta destino por bancoId
   obtenerCuentaDestino(identificador){
    this.transaccionBancoService.obtenerCuentaByBancoIdService(identificador).subscribe(resultado => {
     this.cuentasDestino = resultado;
    },
    error => { console.log(JSON.stringify(error));
    });
  
    }

   //Razones de ajustes
   obtenerRazonesAjustes(){ 
    this.transaccionBancoService.obtenerRazonesAjusteService().subscribe(resultado => {
      this.razonesAjustes = resultado;
      },       
      error => { console.log(JSON.stringify(error));
      });   
    }

    //Agregar
    agregar(){ 
     this.transaccionBancoService.agregarTransaccionService(this.transaccion).subscribe(resultado => {
      this.reset();
      },       
      error => { console.log(JSON.stringify(error));
      });   
    }

    //Reset campo
    reset(){
      this.transaccion.Id = '';
      this.transaccion.Monto = '';
      this.transaccion.TipoTransaccionId = '';
      this.transaccion.BancoOrigenId = '';
      this.transaccion.CuentaOrigenId = '';
      this.transaccion.BancoDestinoId = '';
      this.transaccion.CuentaDestinoId = '';
      this.transaccion.RazonAjusteId = '';
      this.transaccion.Nota = '';
    }

}
