import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public userLogin: User = {};
  private loading: any;
  

  constructor(
    private loadingController: LoadingController,
    private toastController: ToastController,
    private authService: AuthService,
  ) { }

  ngOnInit() { }

  async login() {
    await this.presentLoading();

    try {
      await this.authService.cadastro(this.userLogin);
    }
    catch (error) {
      this.presentToast(error.message)
    } finally {
      this.loading.dismiss();
    }

  }

  async presentLoading() {
    this.loading = await this.loadingController.create({ message: 'Por favor, aguarde um momento' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({ message, duration: 2000 });
    toast.present();
  }
}
