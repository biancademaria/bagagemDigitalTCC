import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
public formLogin: FormGroup;

public mensagens_validacao = {
  email: [
    { tipo: 'required', mensagem: 'O campo E-mail é obrigatório!' },
    { tipo: 'email', mensagem: 'E-mail inválido!' }
  ],
  senha: [
    { tipo: 'required', mensagem: 'O campo senha é obrigatório!' },
    { tipo: 'minlength', mensagem: 'O campo senha deve ter pelo menos 6 caracteres!'}
  ]
};

constructor(
  private formBuilder: FormBuilder, 
  private router: Router,
  private toastController: ToastController,
  
  ) {
  this.formLogin = formBuilder.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
  })
 }

ngOnInit() {
}

public fazerLogin() {
  if(this.formLogin.valid){
    this.toastValido;
    this.router.navigateByUrl("/pagina-inicial");
  }else {
    this.toastInvalido;
    this.router.navigateByUrl("/login");
    
  }
}

async toastValido() {
  const toast = await this.toastController.create({
    message: 'Login realizado com sucesso!',
    duration: 2000
  });
  toast.present();
}

async toastInvalido() {
  const toast = await this.toastController.create({
    message: 'Seu formulário apresenta falhas. Por favor, revise-o.',
    duration: 2000
  });
  toast.present();
}

}
