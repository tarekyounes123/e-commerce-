import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/routes'; // <- we will create this file

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
})
.catch(err => console.error(err));
