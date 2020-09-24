import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosEspanhaPageRoutingModule } from './dados-espanha-routing.module';

import { DadosEspanhaPage } from './dados-espanha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosEspanhaPageRoutingModule
  ],
  declarations: [DadosEspanhaPage]
})
export class DadosEspanhaPageModule {}
