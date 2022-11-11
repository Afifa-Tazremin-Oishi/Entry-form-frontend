import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './components/department/department.component';
import { EditDepartmentComponent } from './components/edit-department/edit-department.component';
import { DeleteDepartmentComponent } from './components/delete-department/delete-department.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    EditDepartmentComponent,
    DeleteDepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
