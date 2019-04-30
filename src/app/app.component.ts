

import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'angular-admin-lte';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { stringify } from '@angular/core/src/render3/util';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public isCustomLayout: boolean;

  public rutaActual: string = "";
  cargaInicial: boolean = false;

  constructor( private layoutService: LayoutService, private router: Router, private location: Location ) {

  }

  ngOnInit() {
    this.layoutService.isCustomLayout.subscribe((value: boolean) => {
      this.isCustomLayout = value;
    });
    
     if(window.location.hash == "#/")
     {
      this.router.navigate(['/login']);
     }
     else{
      this.rutaActual = window.location.href;
     }
  }
  
}
