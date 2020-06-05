import {Resolve, Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {Injectable} from '@angular/core';
import {RequestService} from '../../../shared/services/request.service';
import {APP_URL} from '../../../shared/constants/url';
import {tap} from 'rxjs/operators';
import {UserModel} from '../../../shared/models/user.model';
import {RESPONSE_CODE} from '../../../shared/constants/response';
import {CommonService} from '../../../shared/services/common.service';
import {CautionModalFailedRetrieveInfoComponent} from '../../../shared/components/caution-modal-failed-retrieve-info/caution-modal-failed-retrieve-info.component';

declare interface Coords {
    lat: string;
    lng: string;
}

@Injectable()
export class StoreVisitService implements Resolve<any> {


    constructor(public request: RequestService, public modalController: ModalController, public router: Router,
                private commonService: CommonService) {
    }

    resolve() {
        const user = JSON.parse(localStorage.getItem('user')) as UserModel;
        return this.get({user_id: user.userid});
    }

    get(data) {
        const coords = JSON.parse(localStorage.getItem('coords'));
        if (coords) {
            data.latitude = coords.lat;
            data.longitude = coords.lng;
        }
        return this.request.get(APP_URL.store_visit.get, data)
            .pipe(tap((res: APIResponse) => {
                    if (res.code !== RESPONSE_CODE.SUCCESS) {
                        this.commonService.presentModal(CautionModalFailedRetrieveInfoComponent);
                        throw Error(res.message);
                    }
                },
                err => {
                    console.log(err);
                }));

    }

    scope(type, data) {
        return this.request.get(APP_URL.store_visit[type], data)
            .pipe(tap((res: any) => {
                if (res.code === RESPONSE_CODE.SUCCESS) {
                    res.result.map(item => {
                        item.select = item.select === 'selected';
                    });
                }
                if (res.code === RESPONSE_CODE.FAILED_TO_RETRIEVE) {
                    this.commonService.presentModal(CautionModalFailedRetrieveInfoComponent);
                    throw Error(res.message);
                }
            }));
    }

    update(data) {
        return this.request.post(APP_URL.store_visit.update, data)
            .pipe(tap((res) => {
                console.log(res);
            }));
    }
}
