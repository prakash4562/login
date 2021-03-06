import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular-highcharts'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { BoothComponent } from './booth/booth.component';
import { PannaComponent } from './panna/panna.component';
import { KeyVotersComponent } from './key-voters/key-voters.component';
import { TotalDataComponent } from './total-data/total-data.component';
import { PerformanceReportComponent } from './performance-report/performance-report.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatTabsModule} from "@angular/material/tabs";
import { AngularFormComponent } from './angular-form/angular-form.component';
import { AngularTabComponent } from './angular-tab/angular-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BoothComponent,
    PannaComponent,
    KeyVotersComponent,
    TotalDataComponent,
    PerformanceReportComponent,
    AngularFormComponent,
    AngularTabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
