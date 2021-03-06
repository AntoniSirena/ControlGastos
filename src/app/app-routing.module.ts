import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TiposConceptosComponent } from './mantenimientos/tipos-conceptos/tipos-conceptos.component';
import { PersonaComponent } from './mantenimientos/persona/persona.component';
import { AreaComponent } from './mantenimientos/area/area.component';
import { PeriodosComponent } from './mantenimientos/periodos/periodos.component';
import { TransaccionComponent } from './mantenimientos/transaccion/transaccion.component';
import { AnularTransaccionComponent } from './mantenimientos/anular-transaccion/anular-transaccion.component';
import { HistorialTransaccionAnuladaComponent } from './mantenimientos/historial-transaccion-anulada/historial-transaccion-anulada.component';
import { ResumenTransaccionComponent } from './estadisticas/resumen-transaccion/resumen-transaccion.component';
import { RazonesAnulacionTransaccionComponent } from './mantenimientos/razones-anulacion-transaccion/razones-anulacion-transaccion.component';
import { UsersComponent } from './mantenimientos/users/users.component';
import { PortadaComponent } from './portada/portada.component';
import { BancoComponent } from './mantenimientos/banco/banco/banco.component';
import { CuentaComponent } from './mantenimientos/banco/cuenta/cuenta.component';
import { TransaccionBancoComponent } from './mantenimientos/banco/transaccion-banco/transaccion-banco.component';


const routes: Routes = [
  {
  path: '',

  data: {
      title: ''
  },
  children: [
    {
      path: 'portada',
      component: PortadaComponent
    }, {
      path: 'accordion',
      loadChildren: './+accordion/accordion.module#AccordionModule',
      data: {
        title: 'Accordion'
      }
    }, {
      path: 'alert',
      loadChildren: './+alert/alert.module#AlertModule',
      data: {
        title: 'Alert',
      }
    }, {
      path: 'layout',
      data: {
        title: 'Layout',
      },
      children: [
        {
          path: 'configuration',
          loadChildren: './+layout/configuration/configuration.module#ConfigurationModule',
          data: {
            title: 'Configuration'
          }
        }, {
          path: 'custom',
          loadChildren: './+layout/custom/custom.module#CustomModule',
          data: {
            title: 'Disable Layout'
            // disableLayout: true
          }
        }, {
          path: 'content',
          loadChildren: './+layout/content/content.module#ContentModule',
          data: {
            title: 'Content'
          }
        }, {
          path: 'header',
          loadChildren: './+layout/header/header.module#HeaderModule',
          data: {
            title: 'Header'
          }
        }, {
          path: 'sidebar-left',
          loadChildren: './+layout/sidebar-left/sidebar-left.module#SidebarLeftModule',
          data: {
            title: 'Sidebar Left'
          }
        }, {
          path: 'sidebar-right',
          loadChildren: './+layout/sidebar-right/sidebar-right.module#SidebarRightModule',
          data: {
            title: 'Sidebar Right'
          }
        },
      ]
    }, {
      path: 'boxs',
      data: {
        title: 'Boxs',
      },
      children: [
        {
          path: 'box',
          loadChildren: './+boxs/box-default/box-default.module#BoxDefaultModule',
          data: {
            title: 'Box'
          }
        }, {
          path: 'info-box',
          loadChildren: './+boxs/box-info/box-info.module#BoxInfoModule',
          data: {
            title: 'Info Box'
          }
        }, {
          path: 'small-box',
          loadChildren: './+boxs/box-small/box-small.module#BoxSmallModule',
          data: {
            title: 'Small Box'
          }
        }
      ]}, {
        path: 'dropdown',
        loadChildren: './+dropdown/dropdown.module#DropdownModule',
        data: {
          title: 'Dropdown',
        }
      }, {
        path: 'tabs',
        loadChildren: './+tabs/tabs.module#TabsModule',
        data: {
          title: 'Tabs',
        }
      }
    ]
  }, 
  
  //Bloque para llamar los sub-menu de mantenimientos
  //Las URLs se llaman como un componente no como un modulo

  //Mantenimientos
  {
    path: 'mantenimientos',
    data: {
      title: 'Mantenimientos',
    },
    children: [
      {
        path: 'tipos-conceptos',
        component: TiposConceptosComponent,
        data: {
          title: 'Tipos de Conceptos',
        }
      },

      {
        path: 'persona',
        component: PersonaComponent,
        data: {
          title: 'Personas',
        }
      },

      {
        path: 'area',
        component: AreaComponent,
        data: {
          title: 'Areas',
        }
      },

      {
        path: 'periodo',
        component: PeriodosComponent,
        data: {
          title: 'Periodos',
        }
      },

      {
        path: 'razones-anulacion-transaccion',
        component: RazonesAnulacionTransaccionComponent,
        data: {
          title: 'Razones de anulacion para una Transaccion',
        }
      },

      {
        path: 'users',
        component: UsersComponent,
        data: {
          title: 'Mantenimiento de usuarios',
        }
      }

    ]
  },


 //Transaccion
  {
    path: 'mantenimientos',
    data: {
      title: 'Transacción',
    },
    children: [
      {
        path: 'transaccion',
        component: TransaccionComponent,
        data: {
          title: 'Seleccione el tipo de transacción que desea registrar',
        }
      },

      {
        path: 'anular-transaccion',
        component: AnularTransaccionComponent,
        data: {
          title: 'Proceso para anular una transacción',
        }
      },


      {
        path: 'historial-transaccion-anulada',
        component: HistorialTransaccionAnuladaComponent,
        data: {
          title: 'Seleccione un tipo de transacción para ver su historial',
        }
      }

    ]
  },


  //Estadisticas
  {
    path: 'estadisticas',
    data: {
      title: 'Estadísticas',
    },
    children: [
      {
        path: 'resumen-transaccion',
        component: ResumenTransaccionComponent,
        data: {
          title: 'Resumen',
        }
      }

    ]
  },

  //Banco
  {
    path: 'mantenimientos/banco',
    data: {
      title: 'Banco',
    },
    children: [
      {
        path: 'banco',
        component: BancoComponent,
        data: {
          title: 'Mantenimiento de Banco',
        }
      },
      {
        path: 'cuenta',
        component: CuentaComponent,
        data: {
          title: 'Mantenimiento de Cuenta',
        }
      },
      {
        path: 'transaccion-banco',
        component: TransaccionBancoComponent,
        data: {
          title: '',
        }
      }

    ]
  },
  
  
  

  {
    path: 'login',
    loadChildren: './+login/login.module#LoginModule',
    data: {
      customLayout: true
    }
  }, {
    path: 'register',
    loadChildren: './+register/register.module#RegisterModule',
    data: {
      customLayout: true
    }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
