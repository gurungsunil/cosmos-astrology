import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserQaHistoryComponent } from './user-qa-history/user-qa-history.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: 
  [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    UserQaHistoryComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    FormsModule

  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    UserQaHistoryComponent
  ]
})
export class SharedModule { }
