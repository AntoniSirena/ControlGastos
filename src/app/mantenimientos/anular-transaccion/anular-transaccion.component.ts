import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AnularTransaccionService } from 'src/app/servicios/anularTransaccion/anular-transaccion.service';

declare var $;

@Component({
  selector: 'app-anular-transaccion',
  templateUrl: './anular-transaccion.component.html',
  styleUrls: ['./anular-transaccion.component.css']
})
export class AnularTransaccionComponent implements OnInit {

  constructor( private anularTransaccionService: AnularTransaccionService,  private httpClient: HttpClient ) {

   }

   //Variable globales
   dtOptions: DataTables.Settings = {};
   dtTrigger: Subject<any> = new Subject();
 
   transaccion: any[] = [];
   razonesAnulacion: any[] = [];
   objetoTrasaccion: any = {Id:'', RazonAnulacionId:''};
   id: any = 0
   checkConfirmar: boolean = false;

  ngOnInit() {

    this.obtenerRazonesAnulacion();

    //Bloque para renderisar el DataTable en el html
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      processing: true
    };
    
    this.obtenerTransaccionById(this.id);
    this.dtTrigger.next();
    this.ngOnDestroy();
    
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    $('#datatable').dataTable().fnDestroy();
  }

  
  //Obtener transcion por id
  obtenerTransaccionById(identificador){
    this.anularTransaccionService.obtenerTransaccionByIdService(identificador).subscribe(resultado => {
    this.transaccion = resultado;
    },
    error => { console.log(JSON.stringify(error));
    });

    }

     //Obtener razones de anulacion
  obtenerRazonesAnulacion(){
    this.anularTransaccionService.obtenerRazonesAnulacionService().subscribe(resultado => {
    this.razonesAnulacion = resultado;
    },
    error => { console.log(JSON.stringify(error));
    });

    }


    anularTransaccion(){
      this.anularTransaccionService.anularTransaccionService(this.objetoTrasaccion).subscribe(resultado => {
        this.reset();
        this.checkConfirmar = false;
        this.ngOnInit();
        },
        error => { console.log(JSON.stringify(error));
        });
      }

      
     reset(){
       this.objetoTrasaccion.Id = '';
       this.objetoTrasaccion.RazonAnulacionId = '';
     } 



}
