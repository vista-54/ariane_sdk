import {Observable} from 'rxjs';

export declare interface Request {

    post(url: string, data: object, loader: boolean): Observable<any>;

    get(url: string, data: object, loader: boolean): Observable<any>;
}
