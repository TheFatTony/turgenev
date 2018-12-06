import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main/main-menu/main-menu.component';
import { MainFooterComponent } from './main/main-footer/main-footer.component';


import { TurgenevSharedModule } from 'turgenev-shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    TurgenevSharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
