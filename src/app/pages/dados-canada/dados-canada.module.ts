import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosCanadaPageRoutingModule } from './dados-canada-routing.module';

import { DadosCanadaPage } from './dados-canada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosCanadaPageRoutingModule
  ],
  declarations: [DadosCanadaPage]
})
export class DadosCanadaPageModule {}
