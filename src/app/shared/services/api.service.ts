import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUri: string = 'https://gc6ns7mk5b.execute-api.eu-west-1.amazonaws.com/test/';

  constructor(private httpClient: HttpClient) {
  }

  private buildUri(uri: string): string {
    return `${this.baseUri}${uri}`;
  }

  public getRequest(uri: string): Observable<any> {
    return this.httpClient.get<any>(this.buildUri(uri))
    .pipe(catchError(this.handleError));
  }

  public postRequest(uri: string, data: any): Observable<any> {
    return this.httpClient.post<any>(this.buildUri(uri), data)
    .pipe(catchError(this.handleError));
  }

  public putRequest(uri: string, data: any): Observable<any> {
    return this.httpClient.put<any>(this.buildUri(uri), data)
    .pipe(catchError(this.handleError));
  }

  public deleteRequest(uri: string): Observable<any> {
    return this.httpClient.delete<any>(this.buildUri(uri))
    .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      errorMessage = `Server returned code ${error.status}: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}