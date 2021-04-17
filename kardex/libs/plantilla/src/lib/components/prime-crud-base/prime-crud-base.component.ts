/* eslint-disable @typescript-eslint/no-explicit-any*/
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CrudBasicComponent } from '@kardex/plantilla';

@Component({
  selector: 'kardex-plantilla-prime-crud-base',
  templateUrl: './prime-crud-base.component.html',
  styleUrls: ['./prime-crud-base.component.scss']
})
export class PrimeCrudBaseComponent implements OnInit {
  @ViewChild(CrudBasicComponent, { static: false })

  _crud: CrudBasicComponent;
  _form : FormGroup;
  _id = '';

  // Bandera para mostrar el modal
  modalDialog: boolean;

  // Bandera para enviar el formulario
  submitted = false;
  
  // Bandera para inhabilitar la edición de campos
  soloLectura = false;

  // Etiquetas para los mensajes
  plural = '';
  singular = '';

  // Objeto hijo
  objeto: any = {};
  listadoObjetos: any[];

  // Campos propios del objeto hijo
  campos = {};

  // Servicio
  protected servicio: any;

  constructor(
    protected messageService: MessageService,
    protected confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {
    console.log('PrimeCrudBase');
  }

  initFormGroup(fb: FormBuilder, validaciones: any) {
    
    this.servicio.getAll().then((data) => (this.listadoObjetos = data));
    this._form = fb.group(validaciones);
  }

  findIndexById(objeto: any, id: number) {
    let index = -1;
    for (let i = 0; i < objeto.length; i++) {
      if (objeto[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  onAdd() {
    this.soloLectura = false;
    this.objeto = {};
    this._form.patchValue(this.campos);
    this._form.updateValueAndValidity();
    this._id = '';
  }

  onInsert() {
    if(this._form.valid){
      this.servicio.save(this._form.value)
      .subscribe(
        data => {
          this.listadoObjetos.push(data);
          this.messageService.add({
            severity: 'success',
            summary: 'Éxito',
            detail: this.singular + ' creado',
            life: 3000,
          });
          this._crud.hideDialog();
        },
        error => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error.message,
            life: 3000,
          });
        }
      );
    }else{
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Formulario con errores',
        life: 3000,
      });
    }
  }


  onEdit(record: any) {
    this.soloLectura = true;
    this._form.patchValue(record);
    this._id = record.id;
  }
  
  onUpdate(record: any) {
    this._form.value.id = record.id;
    
    if(this._form.valid){
      this.servicio.update(this._form.value)
      .subscribe(
        data => {
          this.listadoObjetos[this.findIndexById(record, parseInt(this._id))] = data;
          
          this.messageService.add({
            severity: 'success',
            summary: 'Éxito',
            detail: this.singular + ' actualizado',
            life: 3000,
          });

          this._crud.hideDialog();
          this.servicio.getAll().then((data) => (this.listadoObjetos = data));
        },
        error => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error.message,
            life: 3000,
          });
        }
      );
    }else{
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Formulario con errores',
        life: 3000,
      });
    }
  }


  onDelete(record: any) {
    this.deleteRecord(record);
  }

  deleteRecord(objeto: any) {
    this.confirmationService.confirm({
      message: '¿Estás seguro de que quieres eliminar el ' + this.singular + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.listadoObjetos = this.listadoObjetos.filter((val) => val.id !== objeto.id);

        this.servicio.delete(objeto.id).subscribe();
        this.objeto = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: this.singular + ' eliminado',
          life: 3000,
        });
      },
    });
  }

  onDeleteSelected(records: any[]) {
    this.confirmationService.confirm({
      message: '¿Estas seguro de que quieres eliminar los '+this.plural+' seleccionados?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.listadoObjetos = this.listadoObjetos.filter((val) => !records.includes(val));
        for (const valor of records) {
          this.servicio.delete(valor.id).subscribe();
        }
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: this.plural + ' eliminados',
          life: 3000,
        });
      },
    });
  }

}
