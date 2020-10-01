import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.page.html',
    styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

    public formCadastro: FormGroup;

    public mensagens_validacao = {
      nome: [
        { tipo: 'required', mensagem: 'O campo é obrigatório!' },
        { tipo: 'minlength', mensagem: 'Deve ter pelo menos 5 caracteres! ' }
      ],
      usuario: [
        { tipo: 'required', mensagem: 'O campo é obrigatório!' },
        { tipo: 'minlength', mensagem: 'Deve ter pelo menos 5 caracteres! ' }
      ],
      email: [
        { tipo: 'required', mensagem: 'O campo é obrigatório!' }, //obrigatorio
        { tipo: 'email', mensagem: 'E-mail inválido!' } //INVÁLIDO
      ],
      senha: [
        { tipo: 'required', mensagem: 'O campo é obrigatório!' }, //obrigatório
        { tipo: 'minlength', mensagem: 'Deve ter no mínimo 6 caracteres!' } //min 6
      ],
      confirmarSenha: [
        { tipo: 'required', mensagem: 'O campo é obrigatório!' }, //obrigatório
        { tipo: 'minlength', mensagem: 'Deve ter no mínimo 6 caracteres!' }, //min 6
        { tipo: 'comparacao', mensagem: 'As senhas devem ser iguais!' } //senhas iguais
      ],
    }
  
  
    constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      public alertController: AlertController,
      public toastController: ToastController
    ) {
  
  
      this.formCadastro = formBuilder.group({
        nome: ['', Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])], //Nome: [obrigatório, minímo(3)]
        usuario: ['', Validators.compose([
            Validators.required,
            Validators.minLength(5)
          ])],
        email: ['', Validators.compose([
          Validators.required,
          Validators.email
        ])], //E-mail: [obrigatório]
        senha: ['', Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])], //Senha: [obrigatório, minímo(6)]
        confirmarSenha: ['', Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])], //Confirma Senha: [obrigatório, minímo(6)]
    });
    }
  
    ngOnInit() {
    }
  
    public fazerCadastro() {
      if (this.formCadastro.valid) {
        console.log('Formulário Válido!');
        this.toast();
        this.router.navigateByUrl("/login");
      } else {
        console.log('Formulário inválido.');
      }
    }

    async toast() {
      const toast = await this.toastController.create({
        message: 'Seus dados foram salvos! ',
        duration: 2000
      });
      toast.present();
      this.router.navigate(['/login']);
    }

}
