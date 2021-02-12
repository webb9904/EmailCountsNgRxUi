import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../shared/services/api.service';
import { Exclusion } from './exclusion';

@Injectable({
    providedIn: 'root'
})
export class ExclusionService {

    constructor(private apiService: ApiService) {
    }

    public loadExclusions(): Observable<Exclusion[]> {
        return this.apiService.getRequest('getexclusionssummary');
    }

    public addExclusion(exclusion: Exclusion): Observable<Exclusion> {
        return this.apiService.postRequest('createexclusion', exclusion);
    }

    public updateExclusion(exclusion: Exclusion, id: number): Observable<Exclusion> {
        return this.apiService.putRequest(`updateexclusion`, exclusion);
    }

    public deleteExclusion(id: number): Observable<Exclusion> {
        return this.apiService.deleteRequest(`deleteexclusion/${id}`);
    }
}