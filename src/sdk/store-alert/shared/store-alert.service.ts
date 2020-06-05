import {Resolve} from '@angular/router';
import {Injectable} from '@angular/core';
import {RequestService} from '../../shared/services/request.service';
import {APP_URL} from '../../shared/constants/url';
import {tap} from 'rxjs/operators';
import {UserModel} from '../../shared/models/user.model';
import {CautionModalFailedRetrieveInfoComponent} from '../../shared/components/caution-modal-failed-retrieve-info/caution-modal-failed-retrieve-info.component';
import {CommonService} from '../../shared/services/common.service';

@Injectable()
export class StoreAlertService implements Resolve<any> {


    constructor(public request: RequestService, private commonService: CommonService) {
    }


    resolve() {
        const user = JSON.parse(localStorage.getItem('user')) as UserModel;
        return this.get({user_id: user.userid});
    }

    get(data) {
        return this.request.get(APP_URL.store_visit.alert_main, data)
            .pipe(tap((res: APIResponse) => {
                if (res.code !== '0') {
                    this.commonService.presentModal(CautionModalFailedRetrieveInfoComponent);
                    throw Error(res.message);
                }
            }));

    }

    view(data, alert) {
        return this.request.get(APP_URL.store_visit.alert_main + '/' + alert, data)
            .pipe(tap((res: APIResponse) => {
                    if (res.code !== '0') {
                        this.commonService.presentModal(CautionModalFailedRetrieveInfoComponent);
                        throw Error(res.message);
                    }
                }));
    }
}
