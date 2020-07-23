import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: any;
  password: any;
  

  constructor(
    private authService: AuthService,
    public router: Router

  ) { }

  ngOnInit() { }

  fazerLogin() {
    this.authService.login(this.email, this.password).then(res => {
      this.router.navigate(['/pagina-inicial']);
    }).catch(err => alert('Os dados estão incorretos ou este usuário não existe.'));
  }

}
