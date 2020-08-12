import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private ROOT_URL = environment.baseUrl;
  private USER_QA_HISTORY = `${this.ROOT_URL}/user/qa-history/`;

  constructor(private httpClient: HttpClient) { }

  getUserQaHistory(userId: number): Observable<any> {
    return this.httpClient.get<any>(
      this.USER_QA_HISTORY + userId
    );
  }
}