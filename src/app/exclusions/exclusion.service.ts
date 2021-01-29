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
        return this.apiService.getRequest('exclusions');
    }

    public addExclusion(exclusion: Exclusion): Observable<Exclusion> {
        return this.apiService.postRequest('exclusions', exclusion);
    }

    public updateExclusion(exclusion: Exclusion, id: number): Observable<Exclusion> {
        return this.apiService.putRequest(`exclusions/${id}`, exclusion);
    }

    public deleteExclusion(id: number): Observable<Exclusion> {
        return this.apiService.deleteRequest(`exclusions/${id}`);
    }
}