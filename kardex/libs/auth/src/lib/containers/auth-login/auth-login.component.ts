import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from '@kardex/auth';
import { Auth } from './../../models/auth.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kardex-auth-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
  providers: [MessageService],
})
export class AuthLoginComponent implements OnInit {
  inicialForm: FormGroup;

  dialogCaja = false;

  dialogInicial = false;

  respuesta: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    public messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  msgError(error: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Por favor revise los datos ingresados e intente nuevamente',
    });
  }
  msgOk() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: '¡Bienvenido!',
    });
  }

  onSubmit(form: Auth): void {
    this.authService.loginUser(form).subscribe(
      (data) => {
        this.authService.setUser(data.user);
        const token = data.id;
        this.authService.setToken(token);
        this.msgOk();
      },
      (error) => this.msgError(error)
    );
  }

  initForm(): void {
    this.inicialForm = new FormGroup({
      initialValue: new FormControl('0', Validators.required),
    });
  }
}
