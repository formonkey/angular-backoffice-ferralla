import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ShapeRemoteService {
    constructor(private readonly http: HttpClient) {}

    public async getShapes() {
        return this.http.get('http://localhost:9200/api/shapes').toPromise();
    }
}
