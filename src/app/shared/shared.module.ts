import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationTemplateComponent } from './confirmation-template/confirmation-template.component';
import { MatTableModule } from '@angular/material/table';
import { DeleteTemplateComponent } from './delete-template/delete-template.component';
import { SharedTableComponent } from './shared-table/shared-table.component';
import { FieldErrorComponent } from './field-error/field-error.component';



@NgModule({
  declarations: [
    DeleteTemplateComponent,
    ConfirmationTemplateComponent,
    SharedTableComponent,
    FieldErrorComponent
  ],
  imports: [
    CommonModule,MatTableModule
  ],
  exports:[
    DeleteTemplateComponent,
    ConfirmationTemplateComponent,
    SharedTableComponent,FieldErrorComponent
]
})
export class SharedModule { }
