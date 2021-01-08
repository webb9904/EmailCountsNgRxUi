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
    return this.apiService.getRequest('recipients');
  }

  public deleteRecipient(id: number): Observable<any> {
    return this.apiService.deleteRequest(`recipients/${id}`);
  }
}