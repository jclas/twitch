import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class StreamService {
    private _streamUrl = 'https://api.twitch.tv/kraken/search/streams?query=';
    private _headers = new Headers();

    constructor(private _http: Http) { 
        this._headers.append('Accept', 'application/vnd.twitchtv.v5+json');
        this._headers.append('Client-ID', 'pja011zbktnajritkjivfg7zo9mlyl');
    }

    getStreams(query: string, offset: number, limit: number): Observable<any> {
        return this._http.get(this._streamUrl + query + '&limit=' + limit + '&offset=' + offset, {headers: this._headers})
            .map((response: Response) => <any> response.json())
            .do(data => console.log(JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
