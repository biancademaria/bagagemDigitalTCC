import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-alterar-usuario',
  templateUrl: './alterar-usuario.page.html',
  styleUrls: ['./alterar-usuario.page.scss'],
})
export class AlterarUsuarioPage implements OnInit {

  public formAlterar: FormGroup;

  public mensagens_validacao = {
    nome: [
      { tipo: 'required', mensagem: 'O campo é obrigatório!' },
      { tipo: 'minlength', mensagem: 'Deve ter pelo menos 5 caracteres! ' }
    ],
    usuario: [
      { tipo: 'required', mensagem: 'O campo é obrigatório!' },
      { tipo: 'minlength', mensagem: 'Deve ter pelo menos 5 caracteres! ' }
    ],
    nascimento: [
      { tipo: 'required', mensagem: 'O campo é obrigatório!' } //obrigatorio
    ],
    email: [
      { tipo: 'required', mensagem: 'O campo é obrigatório!' }, //obrigatorio
      { tipo: 'email', mensagem: 'E-mail inválido!' } //INVÁLIDO
    ]
  }


  constructor() { }

  ngOnInit() {
  }

}
