import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';

if (environment.production) {
  enableProdMode();
}

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
