import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MundoAforaPage } from './mundo-afora.page';

const routes: Routes = [
  {
    path: '',
    component: MundoAforaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MundoAforaPageRoutingModule {}
