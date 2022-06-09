import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { BoothComponent } from './booth/booth.component';
import { PannaComponent } from './panna/panna.component';
import { KeyVotersComponent } from './key-voters/key-voters.component';
import { TotalDataComponent } from './total-data/total-data.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BoothComponent,
    PannaComponent,
    KeyVotersComponent,
    TotalDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
