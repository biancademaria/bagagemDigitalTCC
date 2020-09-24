import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosJapaoPageRoutingModule } from './dados-japao-routing.module';

import { DadosJapaoPage } from './dados-japao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosJapaoPageRoutingModule
  ],
  declarations: [DadosJapaoPage]
})
export class DadosJapaoPageModule {}
