import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from 'src/models/tag.model';

@Injectable({
    providedIn: 'root',
})
export class TagService {
    private api = `${environment.baseUrl}tag`;
    constructor(private httpClient: HttpClient) {}

    public getAllTags(): Observable<Array<Tag>> {
        return this.httpClient.get<Array<Tag>>(`${this.api}/GetAll`);
    }
}
