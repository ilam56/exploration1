import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormComponent } from './form/form.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, FormComponent, ViewComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }



