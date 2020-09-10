import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {

  public formConfiguracoes: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public alertController: AlertController
  ) {
   }
  

  ngOnInit() {
  }

}
