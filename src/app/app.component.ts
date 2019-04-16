

import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'angular-admin-lte';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public isCustomLayout: boolean;

  constructor( private layoutService: LayoutService, private router: Router ) {}

  ngOnInit() {
    this.layoutService.isCustomLayout.subscribe((value: boolean) => {
      this.isCustomLayout = value;
    });

    //Url que sube por defecto
    //this.router.navigate(['/login']);

  }
  
}
