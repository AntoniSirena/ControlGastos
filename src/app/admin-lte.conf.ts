export const adminLteConf = {
  skin: 'blue',
  // isSidebarLeftCollapsed: false,
  // isSidebarLeftExpandOnOver: false,
  // isSidebarLeftMouseOver: false,
  // isSidebarLeftMini: true,
  // sidebarRightSkin: 'dark',
  // isSidebarRightCollapsed: true,
  // isSidebarRightOverContent: true,
  // layout: 'normal',
  sidebarLeftMenu: [
    //{label: 'MAIN NAVIGATION', separator: true},
   // {label: 'Get Started', route: '/', iconClasses: 'fa fa-road', pullRights: [{text: 'New', classes: 'label pull-right bg-green'}]},
    //{label: 'Layout', iconClasses: 'fa fa-th-list', children: [
        //{label: 'Configuration', route: 'layout/configuration'},
        //{label: 'Custom', route: 'layout/custom'},
        //{label: 'Header', route: 'layout/header'},
        //{label: 'Sidebar Left', route: 'layout/sidebar-left'},
        //{label: 'Sidebar Right', route: 'layout/sidebar-right'},
        //{label: 'Content', route: 'layout/content'}
      //]},
    {label: 'MENU', separator: true},
    //{label: 'Accordion', route: 'accordion', iconClasses: 'fa fa-tasks'},
    //{label: 'Alert', route: 'alert', iconClasses: 'fa fa-exclamation-triangle'},
    // {label: 'Boxs', iconClasses: 'fa fa-files-o', children: [
        //{label: 'Default Box', route: 'boxs/box'},
        //{label: 'Info Box', route: 'boxs/info-box'},
        //{label: 'Small Box', route: 'boxs/small-box'}
      //]},
    //{label: 'Dropdown', route: 'dropdown', iconClasses: 'fa fa-arrows-v'},
    //{label: 'Tabs', route: 'tabs', iconClasses: 'fa fa-th'},

    //Mantenimientos
    {label: 'Mantenimientos', iconClasses: 'fa fa-files-o', 
    children: [
        {label: 'Tipos de conceptos', route: 'mantenimientos/tipos-conceptos'},
        {label: 'Personas', route: 'mantenimientos/persona'},
        {label: 'Areas', route: 'mantenimientos/area'},
        {label: 'Periodos', route: 'mantenimientos/periodo'},
        {label: 'Razones de anulacion', route: 'mantenimientos/razones-anulacion-transaccion'}      
      
    ]},

    //Transaccion
    {label: 'Transacción', iconClasses: 'fa fa-files-o', 
    children: [
        {label: 'Registrar transacción', route: 'mantenimientos/transaccion'},
        {label: 'Anular transacción', route: 'mantenimientos/anular-transaccion'},
        {label: 'Ver transacciones anuladas', route: 'mantenimientos/historial-transaccion-anulada'}   
    ]},

    //Estadisticas
    {label: 'Estadísticas', iconClasses: 'fa fa-files-o', 
    children: [
        {label: 'Resumen de Ingresos/Gastos', route: 'estadisticas/resumen-transaccion'}  
    ]}

    
  
  ]
};
