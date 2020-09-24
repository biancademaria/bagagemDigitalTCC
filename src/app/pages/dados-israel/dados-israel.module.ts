import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosIsraelPageRoutingModule } from './dados-israel-routing.module';

import { DadosIsraelPage } from './dados-israel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosIsraelPageRoutingModule
  ],
  declarations: [DadosIsraelPage]
})
export class DadosIsraelPageModule {}
