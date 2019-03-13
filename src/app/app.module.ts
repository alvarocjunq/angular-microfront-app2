import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PocContaComponent } from 'projects/poc-conta/src/public_api';
import { PocContaModule } from 'poc-conta/poc-conta';

@NgModule({
  declarations: [
    AppComponent,
    PocContaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PocContaModule,
    RouterModule.forRoot([{ path: '', component: PocContaComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
