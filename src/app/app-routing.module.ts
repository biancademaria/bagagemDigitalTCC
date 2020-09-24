import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'pagina-inicial',
    loadChildren: () => import('./pages/pagina-inicial/pagina-inicial.module').then( m => m.PaginaInicialPageModule)
  },
  {
    path: 'mundo-afora',
    loadChildren: () => import('./pages/mundo-afora/mundo-afora.module').then( m => m.MundoAforaPageModule)
  },
  {
    path: 'meu-perfil',
    loadChildren: () => import('./pages/meu-perfil/meu-perfil.module').then( m => m.MeuPerfilPageModule)
  },
  {
    path: 'meu-calendario',
    loadChildren: () => import('./pages/meu-calendario/meu-calendario.module').then( m => m.MeuCalendarioPageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./pages/configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'alterar-usuario',
    loadChildren: () => import('./alterar-usuario/alterar-usuario.module').then( m => m.AlterarUsuarioPageModule)
  },  {
    path: 'dados-canada',
    loadChildren: () => import('./pages/dados-canada/dados-canada.module').then( m => m.DadosCanadaPageModule)
  },
  {
    path: 'dados-japao',
    loadChildren: () => import('./pages/dados-japao/dados-japao.module').then( m => m.DadosJapaoPageModule)
  },
  {
    path: 'dados-israel',
    loadChildren: () => import('./pages/dados-israel/dados-israel.module').then( m => m.DadosIsraelPageModule)
  },
  {
    path: 'dados-espanha',
    loadChildren: () => import('./pages/dados-espanha/dados-espanha.module').then( m => m.DadosEspanhaPageModule)
  },
  {
    path: 'artigo',
    loadChildren: () => import('./pages/artigo/artigo.module').then( m => m.ArtigoPageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./pages/quiz/quiz.module').then( m => m.QuizPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
