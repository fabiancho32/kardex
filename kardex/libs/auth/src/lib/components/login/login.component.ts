import { Auth } from './../../models/auth.model';
import { Persona } from './../../models/persona.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'kardex-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  respuesta: number;

  token: string;

  @Output() onsubmit = new EventEmitter<Auth>();

  usuario: Persona;
  constructor(
    private authService: AuthService,
    private router: Router,
    public messageService: MessageService
  ) {
    this.initForm();
    this.getStatus();
  }

  getStatus() {
    this.token = this.authService.getToken();
    if (this.token != null && this.token != '') {
      this.respuesta = 1;
    } else {
      this.respuesta = 0;
    }
    this.validarRespuesta();
  }

  validarRespuesta() {
    console.log('Respuesta ', this.respuesta);
    if (this.respuesta == 1) {
      console.log('OK');
      this.router.navigate(['/']);
    }
  }

  initForm(): void {
    this.loginForm = new FormGroup({
      user: new FormControl('fgarcia@gmail.com', Validators.required),
      password: new FormControl('123456', Validators.required),
    });
  }

  ngOnInit() {
    console.log('Login');
  }

  onLogin() {
    this.loginForm.markAllAsTouched();
    this.loginForm.updateValueAndValidity();
    if (this.loginForm.valid) {
      this.onsubmit.emit({
        email: this.loginForm.value.user,
        password: this.loginForm.value.password,
      } as Auth);
    }
  }
}
