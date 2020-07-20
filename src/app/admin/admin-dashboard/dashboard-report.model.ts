export interface DashboardReportModel {
  dailyQuestionCount: number;
  dailyAstrologerWorkCount: number;
  dailyModeratorWorkCount: number;
  dailyUnclearQuestionCount: number;
  dailyFreeQuestionCount: number;
  dailyRevenue: number;
}

export interface MonthlyRevenueReportModel {
  month: number;
  revenue: number;
  year: number;
}