import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { MaterialModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';

import { appRoutes } from './routes';
import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { AdminModule } from './admin/admin.module';
import { ModeratorsModule } from './moderators/moderators.module';


export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    AuthModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-left',
      preventDuplicates: true
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: [
          '10.6.1.47:8080',
          'https://online-astro.azurewebsites.net'
        ],
        blacklistedRoutes: []
      }
    }),
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot(),
    NgxSpinnerModule,

    // CUSTOM MODULES 
    AdminModule,
    ModeratorsModule
    // END OF CUSTOM MODULES 
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
