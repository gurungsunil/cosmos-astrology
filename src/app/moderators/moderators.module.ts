import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ModeratorsComponent } from './moderators.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModeratorsTaskComponent } from './moderators-task/moderators-task.component';
import { AuthGuard } from '../auth/auth.guard';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthModule } from '../auth/auth.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from '../shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

const moderatorsRoutes: Routes = [
  {
    path: "moderators",
    component: ModeratorsComponent,
    canActivate: [AuthGuard],
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
    SharedModule,
    RouterModule.forChild(moderatorsRoutes),
    BrowserAnimationsModule,
    DragDropModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    AuthModule,
    NgxSpinnerModule
  ]
})
export class ModeratorsModule { }