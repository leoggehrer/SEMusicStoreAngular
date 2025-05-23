//@CodeCopy
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { ILogon } from '@app-models/account/i-logon';
import { IAuthenticatedUser } from '@app-models/account/i-authenticated-user';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private BASE_URL = environment.API_BASE_URL + '/accounts';

  constructor(private httpClient: HttpClient) {

  }

  public async login(logonData: ILogon): Promise<IAuthenticatedUser> {
    return firstValueFrom(
      this.httpClient.post<IAuthenticatedUser>(
        this.BASE_URL + '/logon',
        logonData
      )
    );
  }

  public logout(sessionToken: string): Promise<any> {
    return firstValueFrom(
      this.httpClient.delete<any>(`${this.BASE_URL}/${sessionToken}`)
    );




    // return this.httpClient
    //   .delete(`${this.BASE_URL}/${sessionToken}`)
    //   .pipe(
    //     catchError((error: HttpErrorResponse) => {
    //       console.error('Error during logout:', error);
    //       throw error;
    //     })
    //   );
  }

  public async requestPassword(email: string): Promise<any> {
    return firstValueFrom(
      this.httpClient.post<IAuthenticatedUser>(
        this.BASE_URL + '/requestPassword',
        {
          email: email,
        }
      )
    );
  }

  public async setPassword(email: string, code: string, password: string): Promise<any> {
    return firstValueFrom(
      this.httpClient.post<IAuthenticatedUser>(this.BASE_URL + '/setPassword', {
        email: email,
        code: code,
        password: password,
      })
    );
  }

  public async changePassword(oldPassword: string, newPassword: string): Promise<any> {
    return firstValueFrom(
      this.httpClient.post<IAuthenticatedUser>(
        this.BASE_URL + '/changePassword',
        {
          oldPassword: oldPassword,
          newPassword: newPassword,
        }
      )
    );
  }
}
