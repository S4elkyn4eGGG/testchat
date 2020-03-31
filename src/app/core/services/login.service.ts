import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  public user = null;

  private httpOptions: { [key: string]: any } = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public signIn(json: string): Observable<any> {
    return this.http.post('auth/issue-token', json, this.httpOptions);
  }

  public signUp(json: string): Observable<any> {
    return this.http.post('auth/register', json, this.httpOptions);
  }
}
