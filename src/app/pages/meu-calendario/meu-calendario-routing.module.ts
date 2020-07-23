import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeuCalendarioPage } from './meu-calendario.page';

const routes: Routes = [
  {
    path: '',
    component: MeuCalendarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeuCalendarioPageRoutingModule {}
