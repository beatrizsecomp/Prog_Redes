import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent }   from './inicio/inicio.component';
import { Top10Component }   from './top10/top10.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'top10', component: Top10Component }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRotasModule { }
