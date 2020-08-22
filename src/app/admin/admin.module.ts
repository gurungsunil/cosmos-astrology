import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ManageModeratorsComponent } from './manage-moderators/manage-moderators.component';
import { ManageAstrologersComponent } from './manage-astrologers/manage-astrologers.component';
import { Routes, RouterModule } from '@angular/router';
import { AddEditModeratorComponent } from './manage-moderators/add-edit-moderator/add-edit-moderator.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { AuthGuard } from '../auth/auth.guard';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AddEditAstrologerComponent } from './manage-astrologers/add-edit-astrologer/add-edit-astrologer.component';
import { AdminMessagesComponent } from './admin-settings/admin-messages/admin-messages.component';
import { AuthModule } from '../auth/auth.module';
import { SharedModule } from '../shared/shared.module';
import { PricingComponent } from './admin-settings/pricing/pricing.component';
import { DataTablesModule } from 'angular-datatables';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CountUpModule } from 'ngx-countup';
import { ManageAstrologersMainComponent } from './manage-astrologers/manage-astrologers-main.component';
import { AstStatsComponent } from './manage-astrologers/ast-stats/ast-stats.component';
import { ModStatsComponent } from './manage-moderators/mod-stats/mod-stats.component';
import { ManageModeratorsMainComponent } from './manage-moderators/manage-moderators-main.component';
import { ChartsModule } from 'ng2-charts';
import { AccountModule } from '../shared/account/account.module';
import { AccountComponent } from '../shared/account/account.component';

const adminRoutes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { role: 'ROLE_ADMIN' },
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: 'dashboard',
            component: AdminDashboardComponent
          },
          {
            path: 'account',
            component: AccountComponent
          },
          {
            path: 'manage-moderators-main',
            component: ManageModeratorsMainComponent,
            canActivateChild: [AuthGuard],
             children: [
               {
                 path: '',
                 component: ManageModeratorsComponent
               }, 
               {
                 path: 'stats',
                 component: ModStatsComponent
               }
             ]
          },
          {
            path: 'manage-astrologers-main',
            component: ManageAstrologersMainComponent,
            canActivateChild: [AuthGuard],
             children: [
               {
                 path: '',
                 component: ManageAstrologersComponent
               }, 
               {
                 path: 'stats',
                 component: AstStatsComponent
               }
             ]
          },
          {
            path: 'settings',
            component: AdminSettingsComponent
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'dashboard'
          },
        ]
      }]
  }
];


@NgModule({
  declarations: [AdminComponent, AdminDashboardComponent, ManageModeratorsMainComponent, ManageModeratorsComponent, ManageAstrologersMainComponent, ManageAstrologersComponent, AddEditModeratorComponent, AdminSettingsComponent, AddEditAstrologerComponent, AdminMessagesComponent, PricingComponent, AstStatsComponent, ModStatsComponent],
  imports: [
    ChartsModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(adminRoutes),
    // BrowserAnimationsModule,
    // BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule,
    MaterialModule,
    AuthModule,
    NgxSpinnerModule,
    CountUpModule,
    AccountModule
  ]
})
export class AdminModule { }

