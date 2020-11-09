import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { DashboardReportModel, MonthlyRevenueReportModel } from './dashboard-report.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  today: number = Date.now();
  currentMonthRevenue: number = null;
  revenueDiff: number = null;

  dashboardReport: DashboardReportModel = {
    dailyQuestionCount: null,
    dailyAstrologerWorkCount: null,
    dailyModeratorWorkCount: null,
    dailyUnclearQuestionCount: null,
    dailyFreeQuestionCount: null,
    dailyRevenue: null
  };

  barChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: true,
      labels: {
        fontSize: 16,
        fontColor: '#2c2c2c'
      }
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display:true,
            fontColor: '#111111',
            labelString: 'Revenue in dollars($)'
          }
        }
      ],
      xAxes: [
        {
          scaleLabel: {
            display:true,
            fontColor: '#111111',
            labelString: 'Months of the year'
          }
        }
      ]
    }
  };
  barChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[];

  monthlyRevenueReport: Array<MonthlyRevenueReportModel> = [];

  constructor(private _adminService: AdminService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getDashboardReport();
    // this.getModAnswersAll();
    this.getMonthlyRevenueReport();
  }

  getDashboardReport() {
    this._adminService.getDashboardReport().subscribe(response => {
      this.dashboardReport = response;
    },
      error => {
      })
  }

  getMonthlyRevenueReport() {

    this._adminService.getMonthlyRevenueReport().subscribe(response => {
      this.monthlyRevenueReport = response;
      this.initializeChart();
    },
      error => {
      })
  }

  getModAnswersAll() {
    this._adminService.getModAnswersAll().subscribe(response => {
      console.log(response);
    },
      error => {
        console.log(error);
      })
  }

  initializeChart() {
    let monthlyRevenueReportFinal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    this.monthlyRevenueReport.forEach(oneReport => {
      monthlyRevenueReportFinal[oneReport.month - 1] = oneReport.revenue;
    });

    this.barChartData = [
      {
        data: monthlyRevenueReportFinal,
        label: 'Monthly Revenue',
        backgroundColor: '#f3b24c',
        borderColor:'#111111' ,
        borderWidth: 1,
        barThickness: 12
      }
    ];

    this.calculateRevenueDiff(monthlyRevenueReportFinal);
  }

  calculateRevenueDiff(monthlyRevenueReportFinal) {
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let lastMonthRevenue;

    this.currentMonthRevenue = monthlyRevenueReportFinal[currentMonth];

    if (currentMonth !== 1) {
      lastMonthRevenue = monthlyRevenueReportFinal[currentMonth - 1];
      this.revenueDiff = ((this.currentMonthRevenue - lastMonthRevenue)/ lastMonthRevenue)*100;
    } else {
      this.revenueDiff = 0;
    }
    this.revenueDiff = +this.revenueDiff.toFixed(2);
  }

}
