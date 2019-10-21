import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable()
export class RequestService {

    // loading;

    constructor(private http: HttpClient,) {
    }


    public post(url: string, credentials: any) {
        return this.http.post(url, credentials)
            .pipe(tap(() => {
            }, error => {
            }));
    }


}
