import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { APP_ROUTES } from './app.routes';

//modules
import { PageModules } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PAGES_ROUTE } from './pages/pages.routes';

//services
import { SettingsService } from 'src/app/services/settings.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PAGES_ROUTE,
    PageModules,
    SharedModule,
    
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
