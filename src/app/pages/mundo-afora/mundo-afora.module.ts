import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MundoAforaPageRoutingModule } from './mundo-afora-routing.module';

import { MundoAforaPage } from './mundo-afora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MundoAforaPageRoutingModule
  ],
  declarations: [MundoAforaPage]
})
export class MundoAforaPageModule {}
