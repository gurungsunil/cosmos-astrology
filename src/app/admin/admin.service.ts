import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, forkJoin, throwError, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AdminMessage } from './admin-settings/admin-messages/admin-messages.model';
import { QuestionPrice } from './admin-settings/pricing/pricing.model';
import { DatePipe, JsonPipe } from '@angular/common';
import { MonthlyRevenueReportModel } from './admin-dashboard/dashboard-report.model';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private ROOT_URL = environment.baseUrl;
  private ADMIN_MESSAGES = `${this.ROOT_URL}/admin/messages`;
  private QUESTION_PRICE = `${this.ROOT_URL}/admin/question-price`;
  private MOD_ANSWERS_ALL = `${this.ROOT_URL}/admin/modAnswers/all`;
  private DASHBOARD_REPORT = `${this.ROOT_URL}/admin/dashboard`;
  private MONTHLY_REVENUE_REPORT = `${this.ROOT_URL}/admin/monthly-revenue-report?year=`;


  private AST_WORK_REPORT = `${this.ROOT_URL}/admin/astrologers-work-report?`;
  private MOD_WORK_REPORT = `${this.ROOT_URL}/admin/moderators-work-report?`;

  public addModeratorResponse = new BehaviorSubject(null);
  addModeratorResponse$ = this.addModeratorResponse.asObservable();

  public addAstrologerResponse = new BehaviorSubject(null);
  addAstrologerResponse$ = this.addAstrologerResponse.asObservable();

  constructor(private http: HttpClient) { }

  // MESSAGE START

  getMessage(messageType): Observable<AdminMessage[]> {
    return this.http.get<AdminMessage[]>(
      this.ADMIN_MESSAGES + '?type=' + messageType
    );
  }

  saveMessage(adminMessage: AdminMessage): Observable<AdminMessage> {
    return this.http.post<AdminMessage>(
      this.ADMIN_MESSAGES,
      adminMessage
    );
  }

  updateMessage(adminMessage: AdminMessage): Observable<AdminMessage> {
    return this.http.put<AdminMessage>(
      this.ADMIN_MESSAGES + '/' + adminMessage.messageId,
      adminMessage
    );
  }

  deleteMessage(adminMessage: AdminMessage): Observable<any> {
    return this.http.delete<AdminMessage>(
      `${this.ADMIN_MESSAGES}/${adminMessage.messageId}`
    );
  }

  public getAllAdminMessages(): Observable<any[]> {

    const welcomeMessageResponse = this.getMessage('welcome').pipe(catchError(err => of([])));
    const systemMessageResponse = this.getMessage('system').pipe(catchError(err => of([])));

    return forkJoin([welcomeMessageResponse, systemMessageResponse]);
  }

  // MESSAGE END


  // PRICING START
  getQuestionPrice(): Observable<QuestionPrice[]> {
    return this.http.get<QuestionPrice[]>(
      this.QUESTION_PRICE
    );
  }

  saveQuestionPrice(questionPriceModel: QuestionPrice): Observable<QuestionPrice> {
    return this.http.post<QuestionPrice>(
      this.QUESTION_PRICE,
      questionPriceModel
    );
  }
  // PRICING END

  // DASHBOARD START

  getDashboardReport(): Observable<any> {
    return this.http.get<any>(
      this.DASHBOARD_REPORT
    );
  }

  getMonthlyRevenueReport(): Observable<MonthlyRevenueReportModel[]> {
    const date = new Date();
    const currentYear = date.getFullYear();
    return this.http.get<MonthlyRevenueReportModel[]>(this.MONTHLY_REVENUE_REPORT + currentYear);
  }

  getModAnswersAll(): Observable<any> {
    return this.http.get<any>(
      this.MOD_ANSWERS_ALL
    );
  }
  // DASHBOARD END

  // ASTROLOGERS WORK REPORT
  getAstrologersWorkReport(fromDate, toDate): Observable<any> {
    const fromDateStandard = this.toStandardDate(fromDate);
    const toDateStandard = this.toStandardDate(toDate);
    return this.http.get<any>(
      this.AST_WORK_REPORT + 'fromDate=' + fromDateStandard + '&toDate=' + toDateStandard
    ).pipe(retry(2));
  }

  // ASTROLOGERS WORK REPORT END

  // MODERATORS WORK REPORT
  getModeratorsWorkReport(fromDate, toDate): Observable<any> {
    const fromDateStandard = this.toStandardDate(fromDate);
    const toDateStandard = this.toStandardDate(toDate);
    return this.http.get<any>(
      this.MOD_WORK_REPORT + 'fromDate=' + fromDateStandard + '&toDate=' + toDateStandard
    ).pipe(retry(2));
  }
  // MODERATORS WORK REPORT END

  toStandardDate(date: Date) {
    const format = 'yyyy/MM/dd';
    const pipe = new DatePipe('en-US');
    return pipe.transform(date, format);
  }

  // handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     console.error(
  //       `Backend returned code ${error.status}, `);
  //   }
  //   return throwError(
  //     'Something bad happened; please try again later.');
  // }


}
