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

import { FilterPipeModule } from 'ngx-filter-pipe';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { PersonaComponent } from './mantenimientos/persona/persona.component';
import { AreaComponent } from './mantenimientos/area/area.component';
import { PeriodosComponent } from './mantenimientos/periodos/periodos.component';
import { TransaccionComponent } from './mantenimientos/transaccion/transaccion.component';
import { AnularTransaccionComponent } from './mantenimientos/anular-transaccion/anular-transaccion.component';
import { HistorialTransaccionAnuladaComponent } from './mantenimientos/historial-transaccion-anulada/historial-transaccion-anulada.component';
import { FilterElementsPipe } from './pipes/filter-elements.pipe';
import { GroupByPipe } from './pipes/group-by.pipe';
import { ResumenTransaccionComponent } from './estadisticas/resumen-transaccion/resumen-transaccion.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LayoutModule.forRoot(adminLteConf),
    LoadingPageModule, MaterialBarModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    FilterPipeModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    TiposConceptosComponent,
    PersonaComponent,
    AreaComponent,
    PeriodosComponent,
    TransaccionComponent,
    AnularTransaccionComponent,
    HistorialTransaccionAnuladaComponent,
    FilterElementsPipe,
    GroupByPipe,
    ResumenTransaccionComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
