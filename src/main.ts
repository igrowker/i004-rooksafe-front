import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { materialProviders } from './app/shared/material/material.module';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    materialProviders 
  ]
}).catch(err => console.error(err));
