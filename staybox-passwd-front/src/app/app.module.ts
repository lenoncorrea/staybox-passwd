import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneratePasswordComponent } from './generate-password/generate-password.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { ToogleComponent } from './toogle/toogle.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneratePasswordComponent,
    ClipboardComponent,
    ToogleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    GeneratePasswordComponent,
    ClipboardComponent,
    ToogleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
