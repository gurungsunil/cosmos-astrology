import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AstrologersComponent } from './astrologers.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { AuthModule } from '../auth/auth.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RoleGuard } from '../auth/role-guard.service';
import { AuthGuard } from '../auth/auth.guard';
import { AstrologersTaskComponent } from './astrologers-task/astrologers-task.component';

const astrologersRoutes: Routes = [
  {
    path: "astrologers",
    component: AstrologersComponent,
    canActivate: [RoleGuard],
    data: { role: 'ROLE_ASTROLOGER' },
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: 'astrologers-task',
            component: AstrologersTaskComponent
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'astrologers-task'
          }
        ]
      }]
  }
];


@NgModule({
  declarations: [AstrologersComponent, AstrologersTaskComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(astrologersRoutes),
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    AuthModule,
    NgxSpinnerModule
  ]
})
export class AstrologersModule { }
