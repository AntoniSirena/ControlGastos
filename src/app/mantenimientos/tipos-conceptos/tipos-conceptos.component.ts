import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tipos-conceptos',
  templateUrl: './tipos-conceptos.component.html',
  styleUrls: ['./tipos-conceptos.component.css']
})
export class TiposConceptosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
