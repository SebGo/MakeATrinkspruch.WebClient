import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpParams,
    HttpHeaders,
    HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Toast } from 'src/models/toast.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ToastService {
    private api = `${environment.baseUrl}toast`;

    constructor(private httpClient: HttpClient) {}

    public getRandomTrinkspruch(tagFilterIds: string[]): Observable<Toast> {
        const headers = new HttpHeaders().set('tagIds', tagFilterIds.join(','));

        const params = new HttpParams().set(
            'tagIds',
            JSON.stringify(tagFilterIds)
        );
        return this.httpClient.get<Toast>(`${this.api}/GetRandom/`, {
            headers,
        });
    }
}
