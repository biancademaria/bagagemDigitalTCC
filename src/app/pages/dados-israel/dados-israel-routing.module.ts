import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosIsraelPage } from './dados-israel.page';

const routes: Routes = [
  {
    path: '',
    component: DadosIsraelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosIsraelPageRoutingModule {}
