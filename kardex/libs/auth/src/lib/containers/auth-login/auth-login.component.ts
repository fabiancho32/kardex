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
        this.authService.setUser(data.currentUser);
        this.authService.setMenu(data.menu);
        this.authService.setCaja(data.cashRegisterCode);
        const token = data.token;
        this.authService.setToken(token);
        if (data.cashRegisterCode == 3) {
          this.openDialogCaja();
        } else if (data.cashRegisterCode == 2) {
          this.openDialogInicial();
        } else {
          this.router.navigate(['']);
        }
        this.msgOk();
      },
      (error) => this.msgError(error)
    );
  }

  openDialogCaja() {
    this.dialogCaja = true;
  }

  hideDialogCaja() {
    this.dialogCaja = false;
  }

  openDialogInicial() {
    this.dialogInicial = true;
  }

  hideDialogInicial() {
    this.dialogInicial = false;
  }
  iniciarCaja() {
    this.inicialForm.markAllAsTouched();
    this.inicialForm.updateValueAndValidity();
    if (this.inicialForm.valid) {
      const initialValue = this.inicialForm.value.initialValue;
      this.authService.iniciarCaja(initialValue).then((data) => {
        this.respuesta = data;
        this.authService.setCaja(1);
        this.router.navigate(['']);
      });
    }
  }

  initForm(): void {
    this.inicialForm = new FormGroup({
      initialValue: new FormControl('0', Validators.required),
    });
  }

  respuestaCaja(respuesta: number) {
    this.hideDialogCaja();
    if (respuesta === 1) {
      this.router.navigate(['']);
    } else if (respuesta === 2) {
      this.openDialogInicial();
    } else {
      this.authService.logoutUser();
    }
  }
}
