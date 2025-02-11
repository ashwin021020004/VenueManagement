import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appRouting } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [...appRouting],
}).catch((err) => console.error(err));
