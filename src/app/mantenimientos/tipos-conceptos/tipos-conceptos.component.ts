import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { TiposConceptosService } from 'src/app/servicios/tiposConceptos/tipos-conceptos.service';

@Component({
  selector: 'app-tipos-conceptos',
  templateUrl: './tipos-conceptos.component.html',
  styleUrls: ['./tipos-conceptos.component.css']
})
export class TiposConceptosComponent implements OnInit, OnDestroy  {

  constructor(private tiposConceptosService: TiposConceptosService, private http: HttpClient) { }

  
  tiposConceptos: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();


  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.tiposConceptosService.obtenerTiposConceptosService().subscribe(data => {
      this.tiposConceptos = data;
      this.dtTrigger.next();
    });
    
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  
}
