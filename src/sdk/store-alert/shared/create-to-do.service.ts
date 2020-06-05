import {Injectable} from '@angular/core';
import {APP_URL} from '../../shared/constants/url';
import {RequestService} from '../../shared/services/request.service';

@Injectable()
export class CreateToDoService {


    constructor(public request: RequestService) {
    }


    save(data) {
        return this.request.post(APP_URL.to_do.create, data);
    }
}