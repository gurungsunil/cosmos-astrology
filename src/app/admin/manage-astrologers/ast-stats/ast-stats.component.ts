import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-ast-stats',
  templateUrl: './ast-stats.component.html',
  styleUrls: ['./ast-stats.component.css']
})
export class AstStatsComponent implements OnInit {
  public astrologersWorkReportList = [];
  public fromDate: Date;
  public toDate: Date;
  constructor(private _adminService: AdminService,
   private _spinner: NgxSpinnerService) { }

  ngOnInit() {  
    this.setInitialDates();
    this.getAstrologerStats();
  }

  setInitialDates() {
    let today = new Date();
    this.fromDate = new Date();
    this.fromDate.setDate(1);
    this.toDate = new Date(today.getFullYear(), today.getMonth()+1, 0);
  }

  getAstrologerStats() {
    this._spinner.show();
    this._adminService.getAstrologersWorkReport(this.fromDate, this.toDate).subscribe(response => {
      this.astrologersWorkReportList = response;
      this._spinner.hide();
    },
    error=>{
      this._spinner.hide();
      this.astrologersWorkReportList = [];
    })
  }

}