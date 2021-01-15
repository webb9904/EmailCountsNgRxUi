import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  constructor(private apiService: ApiService) {
  }

  public getCount(date: string): Observable<number> {
    return this.apiService.getRequest(`getcounts/${date}`);
  }
}
