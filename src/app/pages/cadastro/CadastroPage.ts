import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.page.html',
    styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
    username: string;
    name: string;
    email: any;
    password: any;

    constructor(
        private authService: AuthService,
        public router: Router

    ) { }

    ngOnInit() {
    }

    fazerCadastro() {
        this.authService.cadastro(this.username, this.name, this.email, this.password).then(res => {
            this.router.navigate(['/pagina-inicial']);
          }).catch(err => alert('Verifique suas informções e tente novamente. Senhas devem ter mais do que seis caracteres.'));
    }

}
