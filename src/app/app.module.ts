import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { adminLteConf } from './admin-lte.conf';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { LayoutModule } from 'angular-admin-lte';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import { TiposConceptosComponent } from './mantenimientos/tipos-conceptos/tipos-conceptos.component';

import { DataTablesModule } from 'angular-datatables';

import { FormsModule } from '@angular/forms';
import { PersonaComponent } from './mantenimientos/persona/persona.component';
import { AreaComponent } from './mantenimientos/area/area.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LayoutModule.forRoot(adminLteConf),
    LoadingPageModule, MaterialBarModule,
    DataTablesModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    TiposConceptosComponent,
    PersonaComponent,
    AreaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
