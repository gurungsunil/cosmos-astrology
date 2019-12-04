import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
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
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-left',
      preventDuplicates: true
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: [
          'cosmos-api.azurewebsites.net',
          '10.6.1.47:8082',
          'd9eac8a7.ngrok.io'
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
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
