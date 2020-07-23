import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeuCalendarioPageRoutingModule } from './meu-calendario-routing.module';

import { MeuCalendarioPage } from './meu-calendario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeuCalendarioPageRoutingModule
  ],
  declarations: [MeuCalendarioPage]
})
export class MeuCalendarioPageModule {}
