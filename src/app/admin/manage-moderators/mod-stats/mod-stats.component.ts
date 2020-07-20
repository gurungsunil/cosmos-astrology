import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-mod-stats',
  templateUrl: './mod-stats.component.html',
  styleUrls: ['./mod-stats.component.css']
})
export class ModStatsComponent implements OnInit {

  public moderatorsWorkReportList = [];
  public fromDate: Date;
  public toDate: Date;
  constructor(private _adminService: AdminService,
   private _spinner: NgxSpinnerService) { }

  ngOnInit() {  
    this.setInitialDates();
    this.getModeratorStats();
  }

  setInitialDates() {
    let today = new Date();
    this.fromDate = new Date();
    this.fromDate.setDate(1);
    this.toDate = new Date(today.getFullYear(), today.getMonth()+1, 0);
  }

  getModeratorStats() {
    this._spinner.show();
    this._adminService.getModeratorsWorkReport(this.fromDate, this.toDate).subscribe(response => {
      this.moderatorsWorkReportList = response;
      this._spinner.hide();
    },
    error=>{
      this._spinner.hide();
      this.moderatorsWorkReportList = [];
    })
  }

}