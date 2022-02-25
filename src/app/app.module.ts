import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { ButtonComponent } from './components/button/button.component';
import { OrderFormComponent } from './components/order-form/order-form.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, OrderFormComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
