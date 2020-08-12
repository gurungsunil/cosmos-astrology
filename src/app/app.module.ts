import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { appRoutes } from './routes';
import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { ModeratorsModule } from './moderators/moderators.module';
import { SharedModule } from './shared/shared.module';
import { AstrologersModule } from './astrologers/astrologers.module';
import { CountUpModule } from 'ngx-countup';
import { ChartsModule } from 'ng2-charts';
import { ErrorInterceptor } from './auth/error.interceptor';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AuthModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ChartsModule,
    CountUpModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-left',
      preventDuplicates: true
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: [
          'localhost:8080',
          '144.91.121.115:8080',
          'api.cosmosastrology.com'
        ],
        blacklistedRoutes: []
      }
    }),
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot(),
    NgxSpinnerModule,

    // CUSTOM MODULES 
    AdminModule,
    ModeratorsModule,
    AstrologersModule
    // END OF CUSTOM MODULES 
  ],
  providers: [AppService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
