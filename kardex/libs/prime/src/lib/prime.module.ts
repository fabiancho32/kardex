import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {AvatarModule} from 'primeng/avatar';
import {SlideMenuModule} from 'primeng/slidemenu';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {PasswordModule} from 'primeng/password';
import {InputMaskModule} from 'primeng/inputmask';
import {TabViewModule} from 'primeng/tabview';
import {InputSwitchModule} from 'primeng/inputswitch';
import {SelectButtonModule} from 'primeng/selectbutton';
import {PanelMenuModule} from 'primeng/panelmenu';
import {FieldsetModule} from 'primeng/fieldset';
import {AccordionModule} from 'primeng/accordion';

@NgModule({
  imports: [
    TableModule,
    ToastModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    DialogModule,
    ButtonModule,
    DropdownModule,
    ProgressBarModule,
    InputTextModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    AvatarModule,
    SlideMenuModule,
    TieredMenuModule,
    VirtualScrollerModule,
    ScrollPanelModule,
    PasswordModule,
    InputMaskModule,
    TabViewModule,
    InputSwitchModule,
    SelectButtonModule,
    PanelMenuModule,
    FieldsetModule,
    AccordionModule,
  ],
  exports:[
    TableModule,
    ToastModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    DialogModule,
    ButtonModule,
    DropdownModule,
    ProgressBarModule,
    InputTextModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    AvatarModule,
    SlideMenuModule,
    TieredMenuModule,
    VirtualScrollerModule,
    ScrollPanelModule,
    PasswordModule,
    InputMaskModule,
    TabViewModule,
    InputSwitchModule,
    SelectButtonModule,
    PanelMenuModule,
    FieldsetModule,
    AccordionModule,
  ],
  providers: [
     MessageService, ConfirmationService
  ]
})
export class PrimeModule {}
