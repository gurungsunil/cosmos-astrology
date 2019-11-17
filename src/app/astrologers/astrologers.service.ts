import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AstrologerModel } from './astrologer.model';

@Injectable({
  providedIn: 'root'
})
export class AstrologersService {

  private ROOT_URL = environment.baseUrl;
  private ASTROLOGERS = `${this.ROOT_URL}/admin/manage/astrologers`;

  constructor(private httpClient: HttpClient) { }

  getAllAstrologers(): Observable<any> {
    return this.httpClient.get<any>(
      this.ASTROLOGERS
    );
  }

  saveOrUpdateAstrologers(astrologerModel: AstrologerModel): Observable<AstrologerModel> {
    return this.httpClient.post<AstrologerModel>(
      this.ASTROLOGERS,
      astrologerModel
    );
  }

  deleteAstrologers(astrologerId): Observable<any> {
    return this.httpClient.delete<any>(
      this.ASTROLOGERS + '/' + astrologerId
    );
  }
}
