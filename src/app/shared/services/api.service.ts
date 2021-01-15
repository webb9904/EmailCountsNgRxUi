import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  devBaseUri: string = 'http://localhost:3000/';
  baseUri: string = 'https://gc6ns7mk5b.execute-api.eu-west-1.amazonaws.com/test/';

  constructor(private httpClient: HttpClient) {
  }

  private buildUri(uri: string): string {
    return `${this.devBaseUri}${uri}`;
  }

  public getRequest(uri: string): Observable<any> {
    return this.httpClient.get<any>(this.buildUri(uri));
  }

  public postRequest(uri: string, data: any): Observable<any> {
    return this.httpClient.post<any>(this.buildUri(uri), data);
  }

  public putRequest(uri: string, data: any): Observable<any> {
    return this.httpClient.put<any>(this.buildUri(uri), data);
  }

  public deleteRequest(uri: string): Observable<any> {
    return this.httpClient.delete<any>(this.buildUri(uri));
  }
}