import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AdminMessage } from './admin-settings/admin-messages/admin-messages.model';
import { QuestionPrice } from './admin-settings/pricing/pricing.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private ROOT_URL = environment.baseUrl;
  private ADMIN_MESSAGES = `${this.ROOT_URL}/admin/messages`;
  private QUESTION_PRICE = `${this.ROOT_URL}/admin/question-price`;

  public addModeratorResponse = new BehaviorSubject(null);
  addModeratorResponse$ = this.addModeratorResponse.asObservable();

  public addAstrologerResponse = new BehaviorSubject(null);
  addAstrologerResponse$ = this.addAstrologerResponse.asObservable();

  constructor(private http: HttpClient) { }

  // MESSAGE START 

  getMessage(messageType): Observable<AdminMessage> {
    return this.http.get<AdminMessage>(
      this.ADMIN_MESSAGES + '?type=' + messageType
    );
  }

  saveOrUpdateMessage(adminMessage: AdminMessage): Observable<AdminMessage> {
    return this.http.post<AdminMessage>(
      this.ADMIN_MESSAGES,
      adminMessage
    );
  }

  public getAllAdminMessages(): Observable<any[]> {

    let welcomeMessageResponse = this.getMessage('welcome');
    let systemMessageResponse = this.getMessage('system');

    return forkJoin([welcomeMessageResponse, systemMessageResponse]);
  }

  // MESSAGE END 

  // PRICING START 
  getQuestionPrice(): Observable<QuestionPrice[]> {
    return this.http.get<QuestionPrice[]>(
      this.QUESTION_PRICE
    );
  }
  // PRICING END 

  saveQuestionPrice(questionPriceModel: QuestionPrice): Observable<QuestionPrice> {
    return this.http.post<QuestionPrice>(
      this.QUESTION_PRICE,
      questionPriceModel
    );
  }

}
