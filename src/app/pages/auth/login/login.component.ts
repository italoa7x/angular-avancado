import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: LoginService
  ) {}

  ngOnInit(): void {
    this.iniciarForm();
  }

  iniciarForm(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }
  autenticar() {
    const email = this.form.get('email')?.value;
    const senha = this.form.get('senha')?.value;

    if (email && senha) {
      this.service.logar(email, senha);
      this.router.navigate(['/area-logado']);
    }
  }

  formInvalid(): boolean {
    return !this.form.valid;
  }
}
