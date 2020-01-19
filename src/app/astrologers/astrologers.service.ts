import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AstrologerModel, QueryModel } from './astrologer.model';

@Injectable({
  providedIn: 'root'
})
export class AstrologersService {

  private ROOT_URL = environment.baseUrl;
  private ASTROLOGERS = `${this.ROOT_URL}/admin/manage/astrologers`;
  private UA_QUESTIONS_FETCH =  `${this.ROOT_URL}/astrologer/ua-questions/fetch`;
  private UA_QUESTIONS_POST =  `${this.ROOT_URL}/astrologer/ua-questions/answer`;

  constructor(private httpClient: HttpClient) { }

  getAllAstrologers(): Observable<any> {
    return this.httpClient.get<any>(
      this.ASTROLOGERS
    );
  }

  saveAstrologer(astrologerModel: AstrologerModel): Observable<AstrologerModel> {
    return this.httpClient.post<AstrologerModel>(
      this.ASTROLOGERS,
      astrologerModel
    );
  }

  updateAstrologer(astrologerId, astrologerModel): Observable<AstrologerModel> {
    return this.httpClient.put<any>(
      this.ASTROLOGERS + '/'+ astrologerId,
      astrologerModel
    );
  }

  deleteAstrologers(astrologerId): Observable<any> {
    return this.httpClient.delete<any>(
      this.ASTROLOGERS + '/' + astrologerId
    );
  }

  getUaQuestions() {
    return this.httpClient.get<any>(this.UA_QUESTIONS_FETCH);
  }

  postAstrologerAnswer(queryModel: QueryModel): Observable<any> {
    return this.httpClient.post<QueryModel> (this.UA_QUESTIONS_POST, queryModel);
  }
}
