import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaLogadoComponent } from './area-logado/area-logado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

export function getToken() {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [AppComponent, AreaLogadoComponent, LoginComponent],
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
