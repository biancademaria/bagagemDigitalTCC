import { Component, OnInit } from '@angular/core';
import {FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {

  public formConfiguracoes: FormGroup;

  constructor(
    public alertController: AlertController
  ) {
   }
  

  ngOnInit() {
  }

}
