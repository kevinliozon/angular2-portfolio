import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { AboutComponent } from './about/about.component';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
