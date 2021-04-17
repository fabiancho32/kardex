/* eslint-disable @typescript-eslint/no-explicit-any*/
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { ColumnModel } from '../../models/column.model';
import { FormModel } from '../../models/form.model';

@Component({
  selector: 'kardex-plantilla-prime-crud-responsive',
  templateUrl: './prime-crud-responsive.component.html',
  styleUrls: ['./prime-crud-responsive.component.scss']
})
export class PrimeCrudResponsiveComponent implements OnInit {


  constructor() { console.log('PrimeCrudResponsive'); }

  isediting = false;

  submitted = false;

  record: any = {};

  selectedRecords: any[] = [];

  public dialog= false;

  @Input()  public insertTemplate: TemplateRef<any>;

  @Input()  public data:any[] = [];

  @Input()  public title = '';
  
  @Input()  public plural = '';
  @Input()  public singular = '';

  @Input()  public field_descripcion = '';

  @Input()  public field_id = '';

  @Input()  public filters: string[] = [];

  @Input()  public field_show: ColumnModel[] = [];

  @Input()  public field_form: FormModel[] = [];

  @Output() ondeleteselected = new EventEmitter<any[]>();


  @Output() onadd    = new EventEmitter<void>();

  @Output() onedit   = new EventEmitter<any>();

  @Output() ondelete = new EventEmitter<any>();

  @Output() oninsert = new EventEmitter<any>();

  @Output() onupdate = new EventEmitter<any>();

  ngOnInit(): void {
    console.log('PrimeCrudResponsive');
  }

  openNew() {
    this.record = {};
    this.submitted = false;
    this.dialog = true;
    this.isediting= false;
    this.onadd.emit()
  }

  edit(record: any) {
    this.record = { ...record };
    this.dialog = true;
    this.isediting= true;
    this.onedit.emit(this.record)
  }

  deleteSelected() {
    this.ondeleteselected.emit(this.selectedRecords);
  }



  delete(record: any) {
    this.ondelete.emit(record);
  }

  public hideDialog() {
    this.dialog = false;
    this.submitted = false;
  }



  save() {
    this.submitted = true;
    if (!this.isediting) {
      this.oninsert.emit(this.record);
    }else{
      this.onupdate.emit(this.record);
    }
  }

}
