import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AreaLogadoComponent } from './pages/auth/area-logado/area-logado.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { CadastroComponent } from './pages/auth/cadastro/cadastro.component';

export function getToken() {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [AppComponent, AreaLogadoComponent, LoginComponent, CadastroComponent],
  imports: [
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken,
      },
    }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
