import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Injectable} from '@angular/core';
import {APP_URL} from '../../shared/constants/url';
import {RequestService} from '../../shared/services/request.service';
import {tap} from 'rxjs/operators';
import {UserModel} from '../../shared/models/user.model';
import {CautionModalFailedRetrieveInfoComponent} from '../../shared/components/caution-modal-failed-retrieve-info/caution-modal-failed-retrieve-info.component';
import {CommonService} from '../../shared/services/common.service';

@Injectable()
export class ReportService implements Resolve<any> {


    constructor(public request: RequestService,
                private commonService: CommonService) {
    }


    resolve(route: ActivatedRouteSnapshot) {
        const storeId = route.paramMap.get('store_id');
        const user = JSON.parse(localStorage.getItem('user')) as UserModel;
        return this.get({user_id: user.userid, store_id: storeId});
    }

    get(data) {
        return this.request.get(APP_URL.store_visit.report, data)
            .pipe(tap((res: APIResponse) => {
                if (res.code !== '0') {
                    this.commonService.presentModal(CautionModalFailedRetrieveInfoComponent);
                    throw Error(res.message);
                }
            }));
    }

    send(data) {
        return this.request.post(APP_URL.store_visit.send_report, data);
    }
}
