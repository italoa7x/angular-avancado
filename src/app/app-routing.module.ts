import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardGuard } from './login-guard.guard';
import { AreaLogadoComponent } from './pages/auth/area-logado/area-logado.component';
import { CadastroComponent } from './pages/auth/cadastro/cadastro.component';
import { LoginComponent } from './pages/auth/login/login.component';

const routes: Routes = [
  {
    path: 'area-logado',
    component: AreaLogadoComponent,
    pathMatch: 'full',
    canActivate: [LoginGuardGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },

  {
    path: 'cadastro',
    component: CadastroComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
