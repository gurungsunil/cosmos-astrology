import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ModeratorsComponent } from './moderators.component';
import { RoleGuard } from '../auth/role-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModeratorsTaskComponent } from './moderators-task/moderators-task.component';
import { AuthGuard } from '../auth/auth.guard';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthModule } from '../auth/auth.module';

const moderatorsRoutes: Routes = [
  {
    path: "moderators",
    component: ModeratorsComponent,
    canActivate: [RoleGuard],
    data: { role: 'ROLE_MODERATOR' },
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: 'moderators-task',
            component: ModeratorsTaskComponent
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'moderators-task'
          }
        ]
      }]
  }
];

@NgModule({
  declarations: [ModeratorsComponent, ModeratorsTaskComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(moderatorsRoutes),
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    AuthModule
  ]
})
export class ModeratorsModule { }