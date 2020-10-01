import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.page.html',
  styleUrls: ['./pagina-inicial.page.scss'],
})
export class PaginaInicialPage implements OnInit {

  public folder: string;

  constructor(private activatedRoute: ActivatedRoute,
    public alertController: AlertController,
    private router: Router
    ) { }

  ngOnInit() {
  }

  options = {
    centeredSlides: true,
    loop: true,
    spaceBetween: -14,
  }

  async exibirAlertLogout() {
    const alert = await this.alertController.create({
      header: 'Tem certeza?',
      message: 'Você deseja realmente sair do aplicativo?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, {
          text: 'Sim, sair',
          handler: () => {
            this.router.navigateByUrl('/login');
          }
        }
      ]
    });
    await alert.present();
  }
}

