import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { TestComponent } from './test/test.component';
import { DataTableComponent } from './data-table/data-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { DataTablesModule } from 'angular-datatables';
import { CsvPreviewComponent } from './csv-preview/csv-preview.component';
@NgModule({
  declarations: [
    AppComponent,
    ExpenseEntryComponent,
    TestComponent,
    DataTableComponent,
    UserFormComponent,
    CsvPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,  
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
