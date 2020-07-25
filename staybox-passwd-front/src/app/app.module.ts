import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneratePasswordComponent } from './generate-password/generate-password.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GeneratePasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClipboardModule,
    MatSliderModule,
    FormsModule
  ],
  providers: [
    GeneratePasswordComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
