import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaLogadoComponent } from './area-logado/area-logado.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardGuard } from './login-guard.guard';

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
