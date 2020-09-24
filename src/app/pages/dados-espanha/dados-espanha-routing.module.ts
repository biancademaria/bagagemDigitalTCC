import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosEspanhaPage } from './dados-espanha.page';

const routes: Routes = [
  {
    path: '',
    component: DadosEspanhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosEspanhaPageRoutingModule {}
