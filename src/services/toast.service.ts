import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Toast } from 'src/models/toast.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ToastService {
    private api = `${environment.baseUrl}toast`;

    constructor(private httpClient: HttpClient) {}

    public getRandomTrinkspruch(): Observable<Toast> {
        return this.httpClient.get<Toast>(`${this.api}/GetRandom`);
    }
}
