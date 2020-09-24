import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosCanadaPage } from './dados-canada.page';

const routes: Routes = [
  {
    path: '',
    component: DadosCanadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosCanadaPageRoutingModule {}
