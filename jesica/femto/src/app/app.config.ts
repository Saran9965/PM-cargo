import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReceivingComponent } from './receiving/receiving.component';
import { PreviewTableComponent } from './preview-table/preview-table.component';

import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    ReceivingComponent,
    PreviewTableComponent
  ]
};
