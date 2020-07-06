import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.page.html',
    styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
    public userCadastro: User = {};
    private loading: any;

    constructor(
        private loadingController: LoadingController,
        private toastController: ToastController,
        private authService: AuthService
    ) { }

    ngOnInit() {
    }


    async cadastro() {
        await this.presentLoading();

        try {
            await this.authService.cadastro(this.userCadastro);
        }
        catch (error) {
            let message: string;

            switch (error.code) {
                case 'auth/email-already-in-use':
                message = "O E-mail já está sendo usado. Por favor, adicione outro ou faça login!";
                break;

                case 'auth/invalid-email':
                message = "E-mail inválido. Confira o e-mail digitado e, depois, tente novamente.";
                break;
            }

            this.presentToast(message)
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
