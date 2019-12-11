import {ModalController} from '@ionic/angular';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {TodoResponse} from '../../../tabs/shared/services/to-do.service';
import {APP_URL} from '../../../shared/constants/url';
import {Injectable} from '@angular/core';
import {RequestService} from '../../../shared/services/request.service';
import {tap} from 'rxjs/operators';
import {UserModel} from '../../../shared/models/user.model';
import {CautionModalFailedRetrieveInfoComponent} from '../../../shared/components/caution-modal-failed-retrieve-info/caution-modal-failed-retrieve-info.component';
import {CommonService} from '../../../shared/services/common.service';

@Injectable()
export class ToDoListService implements Resolve<any> {


    constructor(public request: RequestService, public modalController: ModalController, public router: Router,
                private commonService: CommonService) {
    }


    resolve(route: ActivatedRouteSnapshot) {
        const alertCode = route.paramMap.get('code');
        const user = JSON.parse(localStorage.getItem('user')) as UserModel;
        return this.list({user_id: user.userid, alert_code: alertCode});
    }


    list(data) {
        return this.request.get(APP_URL.to_do.list, data)
            .pipe(tap((res: TodoResponse) => {
                if (res.code !== '0') {
                    this.commonService.presentModal(CautionModalFailedRetrieveInfoComponent);
                    throw Error(res.message);
                }
            }));
    }


    markAs(data) {
        return this.request.post(APP_URL.to_do.update, data)
            .pipe(tap((res: TodoResponse) => {
                    console.log(res);
                },
                err => {
                    console.log(err);
                }));
    }

    delete(data) {
        return this.request.post(APP_URL.to_do.delete, data)
            .pipe(tap((res: TodoResponse) => {
                    console.log(res);
                },
                err => {
                    console.log(err);
                }));
    }
}
