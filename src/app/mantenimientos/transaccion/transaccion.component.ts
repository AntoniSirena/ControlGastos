import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TransaccionService } from 'src/app/servicios/transaccion/transaccion.service';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent implements OnInit {

  constructor( private transaccionService: TransaccionService, private http: HttpClient) { }


  //Variable globales
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  tiposConceptos: any[] = [];
  semanas: any[] = [];
  areas: any[] = [];
  gastos : any[] = [];

  gasto: any = {
  Id: '', 
  ConceptoId: '', 
  SemanaId: '', AreaId: '',
  Monto: '', 
  FechaCreacion: '', 
  Comentario: '', 
  Referencia: '', 
  Origen: '' 
  };



   //Primer metodo que se ejecuta al momento de cargar el sistema
  ngOnInit() {
  
   this.obtenerTiposConceptos();
   this.obtenerSemans();
   this.obtenerAreas();

    //Bloque para renderisar el DataTable en el html
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      processing: true
    };

    this.transaccionService.obtenerGastoService().subscribe(data => {
      this.gastos = data;
      this.dtTrigger.next();
    });

  }


  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  

 //Agregar
    agregarTipoConcepto(){ 
    this.transaccionService.agregarTransaccionGastoService(this.gasto).subscribe(resultado => {
        this.reset();
        },       
        error => { console.log(JSON.stringify(error));
        });   
    }

    //TiposConceptos
    obtenerTiposConceptos(){ 
      this.transaccionService.obtenerTiposConceptoService().subscribe(resultado => {
            this.tiposConceptos = resultado;
          },       
          error => { console.log(JSON.stringify(error));
          });   
      }

      //Semanas
      obtenerSemans(){ 
        this.transaccionService.obtenerSemanaService().subscribe(resultado => {
              this.semanas = resultado;
            },       
            error => { console.log(JSON.stringify(error));
            });   
        }

        //Areas
        obtenerAreas(){ 
          this.transaccionService.obtenerAreaService().subscribe(resultado => {
                this.areas = resultado;
              },       
              error => { console.log(JSON.stringify(error));
              });   
          }


     //Metodo para limpiar las variables
      reset()
      {
        this.gasto.Id = '';
        this.gasto.ConceptoId = '';
        this.gasto.SemanaId = '';
        this.gasto.AreaId = '';
        this.gasto.Monto = '';
        this.gasto.FechaCreacion = '';
        this.gasto.Comentario = '';
        this.gasto.Referencia = '';
      }


}
