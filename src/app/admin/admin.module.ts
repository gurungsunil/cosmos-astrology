import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ManageModeratorsComponent } from './manage-moderators/manage-moderators.component';
import { ManageAstrologersComponent } from './manage-astrologers/manage-astrologers.component';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuard } from '../auth/role-guard.service';
import { AddEditModeratorComponent } from './manage-moderators/add-edit-moderator/add-edit-moderator.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material.module';
import { AuthGuard } from '../auth/auth.guard';
import { NgxSpinnerModule } from 'ngx-spinner';

const adminRoutes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [RoleGuard],
    data: { role: 'ROLE_ADMIN' },
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: 'manage-moderators',
            component: ManageModeratorsComponent
          },
          {
            path: 'manage-astrologers',
            component: ManageAstrologersComponent
          }
        ]
      }]
  }
];


@NgModule({
  declarations: [AdminComponent, ManageModeratorsComponent, ManageAstrologersComponent, AddEditModeratorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forChild(adminRoutes),
    NgxSpinnerModule
  ]
})
export class AdminModule { }

