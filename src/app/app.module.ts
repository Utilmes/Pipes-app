import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';

//Configuracion del locale de la app
import localEsAR from '@angular/common/locales/es-AR'

import localFr from '@angular/common/locales/fr'

import { registerLocaleData } from '@angular/common'

registerLocaleData( localEsAR );

registerLocaleData( localFr );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es-AR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
