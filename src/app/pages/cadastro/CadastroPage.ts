import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';

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
      cpf: [
        { tipo: 'required', mensagem: 'O campo é obrigatório!' }, //obrigatorio 
        { tipo: 'minlength', mensagem: 'Deve ter pelo menos 11 caracteres!' }, //min 11
        { tipo: 'maxlength', mensagem: 'Deve ter no máximo 14 caracteres!' }, //max 14
        { tipo: 'invalido', mensagem: 'CPF Inválido!' } //cpf invalido
      ],
      nascimento: [
        { tipo: 'required', mensagem: 'O campo é obrigatório!' } //obrigatorio
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
      public alertController: AlertController
    ) {
  
  
      this.formCadastro = formBuilder.group({
        nome: ['', Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])], //Nome: [obrigatório, minímo(3)]
        usuario: ['', Validators.compose([
            Validators.required,
            Validators.minLength(5)
          ])], //Nome: [obrigatório, minímo(3)]
        cpf: ['', Validators.compose([
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(14)
        ])],//CPF:[obrigatório, minímo(11), máximo(14)]
        nascimento: ['', Validators.compose([
          Validators.required
        ])], //Data de Nascimento: [obrigatório]
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
        this.router.navigateByUrl("/login");
      } else {
        console.log('Formulário inválido.');
      }
    }

}
