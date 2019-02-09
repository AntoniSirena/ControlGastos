import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HistorialTransaccionAnuladaService } from 'src/app/servicios/historialTransaccionAnulada/historial-transaccion-anulada.service';

@Component({
  selector: 'app-historial-transaccion-anulada',
  templateUrl: './historial-transaccion-anulada.component.html',
  styleUrls: ['./historial-transaccion-anulada.component.css']
})
export class HistorialTransaccionAnuladaComponent implements OnInit {

  constructor( private historialTransaccionAnuladaService: HistorialTransaccionAnuladaService, private httpClient: HttpClient) { }


  //Variable globales
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  transaccionesAnuladas : any[] = [];

  ngOnInit() {

    //Bloque para renderisar el DataTable en el html
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      processing: true
    };

    this.historialTransaccionAnuladaService.obtenerTransaccionAnuladasService().subscribe(data => {
      this.transaccionesAnuladas = data;
      this.dtTrigger.next();
    });

  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
