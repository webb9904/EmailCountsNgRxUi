import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../shared/services/api.service';
import { Recipient } from './recipient';

@Injectable({
  providedIn: 'root'
})
export class RecipientService {

  constructor(private apiService: ApiService) {
  }

  public loadRecipients(): Observable<Recipient[]> {
    return this.apiService.getRequest('getrecipientssummary');
  }

  public loadRecipient(id: number): Observable<Recipient> {
    return this.apiService.getRequest(`recipients/${id}`);
  }

  public addRecipient(recipient: Recipient): Observable<Recipient> {
    return this.apiService.postRequest('createrecipient', recipient);
  }

  public updateRecipient(recipient: Recipient, id: number) {
    return this.apiService.putRequest(`updaterecipient`, recipient);
  }

  public deleteRecipient(id: number) {
    return this.apiService.deleteRequest(`deleterecipient/${id}`);
  }
}