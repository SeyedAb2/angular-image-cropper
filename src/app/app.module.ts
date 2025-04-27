import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularPinturaModule } from '@pqina/angular-pintura';
import { FilePondModule } from 'ngx-filepond';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularPinturaModule,
    FilePondModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
