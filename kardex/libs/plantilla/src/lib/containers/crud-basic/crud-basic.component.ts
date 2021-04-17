/* eslint-disable @typescript-eslint/no-explicit-any*/
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { ColumnModel } from '../../models/column.model';
import { FormModel } from '../../models/form.model';
import {
  BreakpointObserver,
  MediaMatcher,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';

@Component({
  selector: 'kardex-plantilla-crud-basic',
  templateUrl: './crud-basic.component.html',
  styleUrls: ['./crud-basic.component.scss']
})
export class CrudBasicComponent implements OnInit {

  private _mobileQueryListener: () => void;

  mobileQuery: MediaQueryList;

  @ViewChild('_crud', { static: false })
  _crud: any;

  @Input()  public dialog = false;


  @Input()
  public insertTemplate: TemplateRef<any>;

  @Input()  public data:any[] = [];

  @Input()  public title = '';
  
  @Input()  public plural = '';
  
  @Input()  public singular = '';

  @Input()  public field_descripcion = '';

  @Input()  public field_id = '';

  @Input()  public filters: string[] = [];

  @Input()  public field_show: ColumnModel[] = [];

  @Input()  public field_form: FormModel[] = [];

  

  @Output() onadd    = new EventEmitter<void>();

  @Output() onedit   = new EventEmitter<any>();

  @Output() ondeleteselected = new EventEmitter<any[]>();

  @Output() ondelete = new EventEmitter<any>();

  @Output() oninsert = new EventEmitter<any>();

  @Output() onupdate = new EventEmitter<any>();

  constructor(
    media: MediaMatcher,
    changeDetectorRef: ChangeDetectorRef,
    public breakpointObserver: BreakpointObserver,
    ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (!state.matches) {
          //console.log("state",state)
        }
      });
  }


  onAdd(){
    //console.log("assasadasdsda")
    this.onadd.emit()
  }

  onEdit(record:any){
    this.onedit.emit(record)
  }

  onDeleteSelected(records:any[]){
    this.ondeleteselected.emit(records)
  }

  onDelete(record){
    this.ondelete.emit(record)
  }

  onInsert(record){
    this.oninsert.emit(record)
  }

  onUpdate(record){
    this.onupdate.emit(record)
  }

  public hideDialog(){
    this._crud.hideDialog();
  }

}
