import {ModalController} from '@ionic/angular';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {APP_URL} from '../../../shared/constants/url';
import {Injectable} from '@angular/core';
import {RequestService} from '../../../shared/services/request.service';
import {TodoResponse} from '../../../tabs/shared/services/to-do.service';
import {tap} from 'rxjs/operators';
import {CautionModalFailedRetrieveInfoComponent} from '../../../shared/components/caution-modal-failed-retrieve-info/caution-modal-failed-retrieve-info.component';
import {CommonService} from '../../../shared/services/common.service';
import {UserModel} from '../../../shared/models/user.model';

@Injectable()
export class ToDoDetailService implements Resolve<any> {


    constructor(public request: RequestService, public modalController: ModalController, public router: Router,
                private commonService: CommonService) {
    }


    resolve(route: ActivatedRouteSnapshot) {
        const taskId = route.paramMap.get('task_id');
        const user = JSON.parse(localStorage.getItem('user')) as UserModel;
        return this.view({user_id: user.userid, task_id: taskId});
    }


    view(data) {
        return this.request.get(APP_URL.to_do.view, data)
            .pipe(tap((res: TodoResponse) => {
                    if (res.code !== '0') {
                        this.commonService.presentModal(CautionModalFailedRetrieveInfoComponent);
                        throw Error(res.message);
                    }
                },
                err => {
                    console.log(err);
                }));
    }
}
