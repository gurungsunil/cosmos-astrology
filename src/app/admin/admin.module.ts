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
import { MaterialModule } from '../shared/material.module';
import { AuthGuard } from '../auth/auth.guard';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AddEditAstrologerComponent } from './manage-astrologers/add-edit-astrologer/add-edit-astrologer.component';
import { AdminMessagesComponent } from './admin-settings/admin-messages/admin-messages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '../auth/auth.module';
import { SharedModule } from '../shared/shared.module';
import { PricingComponent } from './admin-settings/pricing/pricing.component';

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
          },
          {
            path: 'settings',
            component: AdminSettingsComponent
          }
        ]
      }]
  }
];


@NgModule({
  declarations: [AdminComponent, ManageModeratorsComponent, ManageAstrologersComponent, AddEditModeratorComponent, AdminSettingsComponent, AddEditAstrologerComponent, AdminMessagesComponent, PricingComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(adminRoutes),
    // BrowserAnimationsModule,
    // BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    AuthModule,
    NgxSpinnerModule
  ]
})
export class AdminModule { }

