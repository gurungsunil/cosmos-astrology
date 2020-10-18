import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ModeratorModel } from './moderator.model';
import { ModeratorsTaskComponent } from './moderators-task/moderators-task.component';
import { QuestionUnclearModel, TranslatedQuestionRequest,
  TranslatedNepaliAnswer, TranslatedEnglishQuestion } from './moderators-task/moderators-task.model';

@Injectable({
  providedIn: 'root'
})
export class ModeratorsService {

  private ROOT_URL = environment.baseUrl;
  private MODERATORS = `${this.ROOT_URL}/admin/manage/moderators`;
  private GET_CURRENT_JOB = `${this.ROOT_URL}/moderator/current-job`;
  private TRANSLATED_NEPALI_ANSWER = `${this.ROOT_URL}/moderator/ua-astrologerReply/post`;
  private TRANSLATED_ENGLISH_QUESTION = `${this.ROOT_URL}/nep-question/translatedQuestion/post`;

  private GET_ENG_QUESTION_FOR_MODERATOR = `${this.ROOT_URL}/eng-question/pool`;
  private SAVE_TRANSLATED_QUESTION  = `${this.ROOT_URL}/nep-question/translatedQuestion/post`;
  private SKIP_ENG_QUESTION_FOR_MODERATOR = `${this.ROOT_URL}/eng-question/skip/`;
  private MARK_AS_UNCLEAR = `${this.ROOT_URL}/eng-question/mark-unclear`;

  constructor(private httpClient: HttpClient) { }

  getAllModerators(): Observable<any> {
    return this.httpClient.get<any>(
      this.MODERATORS
    );
  }

  saveModerator(moderatorModel: ModeratorModel): Observable<ModeratorModel> {
    return this.httpClient.post<ModeratorModel>(
      this.MODERATORS,
      moderatorModel
    );
  }

  updateModerator(moderatorId, moderatorModel): Observable<ModeratorModel> {
    return this.httpClient.put<any>(
      this.MODERATORS + '/' + moderatorId,
      moderatorModel
    );
  }

  deleteModerator(moderatorId): Observable<any> {
    return this.httpClient.delete<any>(
      this.MODERATORS + '/' + moderatorId
    );
  }

  getCurrentJob(): Observable<any> {
    return this.httpClient.get<ModeratorsTaskComponent>(
      this.GET_CURRENT_JOB
    );
  }

  getEngQuestionForModerator(): Observable<any> {
    return this.httpClient.get<ModeratorsTaskComponent>(
      this.GET_ENG_QUESTION_FOR_MODERATOR
    );
  }

  skipEngQuestionForModerator(engQuesId): Observable<any> {
    return this.httpClient.put<any>(
      this.SKIP_ENG_QUESTION_FOR_MODERATOR + engQuesId, null
    );
  }

  markQuestionAsUnclear(questionUnclearModel): Observable<any> {
    return this.httpClient.post<QuestionUnclearModel> (
      this.MARK_AS_UNCLEAR, questionUnclearModel
    );
  }

  saveTranslatedQuestion(translatedQuestionRequest: TranslatedQuestionRequest): Observable<any> {
    return this.httpClient.post<TranslatedQuestionRequest>(
      this.SAVE_TRANSLATED_QUESTION, translatedQuestionRequest
    );
  }

  saveTranslatedNepaliAnswer(translatedNepaliAnswer: TranslatedNepaliAnswer): Observable<any> {
    return this.httpClient.post<TranslatedQuestionRequest>(
      this.TRANSLATED_NEPALI_ANSWER, translatedNepaliAnswer
    );
  }

  saveTranslatedEnglishQuestion(translatedEnglishQuestion: TranslatedEnglishQuestion): Observable<any> {
    return this.httpClient.post<TranslatedQuestionRequest>(
      this.TRANSLATED_ENGLISH_QUESTION, translatedEnglishQuestion
    );
  }


}
