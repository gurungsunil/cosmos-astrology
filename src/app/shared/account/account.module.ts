import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { ChangePasswordComponent } from './change-password/change-password.component';



@NgModule({
  declarations: [AccountComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class AccountModule { }
