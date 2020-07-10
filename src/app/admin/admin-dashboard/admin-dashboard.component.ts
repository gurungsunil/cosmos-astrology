import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { DashboardReportModel } from './dashboard-report.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  dashboardReport: DashboardReportModel;

  constructor(private _adminService: AdminService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getDashboardReport();
    // this.getModAnswersAll();
  }

  getDashboardReport() {
    this.spinner.show();
    this._adminService.getDashboardReport().subscribe(response =>{
      this.dashboardReport = response;
      this.spinner.hide();
    },
    error=> {
      this.spinner.hide();
    })
  }

  getModAnswersAll() {
    this._adminService.getModAnswersAll().subscribe(response =>{
      console.log(response);
    },
    error=> {
      console.log(error);
    })
  }

}
