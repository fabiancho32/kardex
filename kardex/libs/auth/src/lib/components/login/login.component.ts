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

  respuesta: any;

  token: string;

  @Output() onsubmit = new EventEmitter<Auth>();

  usuario: Persona;
  constructor(
    private authService: AuthService,
    private router: Router,
    public messageService: MessageService
  ) {
    this.initForm();
    //this.getStatus();
  }

  getStatus() {
    this.token = this.authService.getToken();
    this.authService.statusLogin(this.token).then((data) => {
      this.respuesta = data;
      this.validarRespuesta();
    });
  }

  validarRespuesta() {
    console.log('respuesta', this.respuesta.success);
    if (this.respuesta.success == '1') {
      this.router.navigate(['/']);
    }
  }

  initForm(): void {
    this.loginForm = new FormGroup({
      user: new FormControl('89008314', Validators.required),
      password: new FormControl('89008314', Validators.required),
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
