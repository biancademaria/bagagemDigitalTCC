import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosJapaoPage } from './dados-japao.page';

const routes: Routes = [
  {
    path: '',
    component: DadosJapaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosJapaoPageRoutingModule {}
