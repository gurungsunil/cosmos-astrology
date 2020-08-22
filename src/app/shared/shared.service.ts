import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private ROOT_URL = environment.baseUrl;
  private USER_QA_HISTORY = `${this.ROOT_URL}/user/qa-history/`;
  private SEND_CODE_FOR_RESET_PW = `${this.ROOT_URL}/reset-password?email=`;
  private VALIDATE_OTP = `${this.ROOT_URL}/validate-otp`;
  private SAVE_PASSWORD = `${this.ROOT_URL}/save-password`;

  constructor(private httpClient: HttpClient) { }

  getUserQaHistory(userId: number): Observable<any> {
    return this.httpClient.get<any>(
      this.USER_QA_HISTORY + userId
    );
  }

  sendCodeToMail(email: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.post<any>(
      this.SEND_CODE_FOR_RESET_PW + email, '', {headers: headers}
    );
  }

  validateOTP(otpCode: string): Observable<any>  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    const body = {"token": otpCode}
    return this.httpClient.post<any>(
      this.VALIDATE_OTP , body,  {headers: headers}
    );
  }

  submitNewPassword(otpCode: string, password: string): Observable<any>  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    const body = {"token": otpCode, "newPassword": password}
    return this.httpClient.post<any>(
      this.SAVE_PASSWORD , body,  {headers: headers}
    );
  }

}