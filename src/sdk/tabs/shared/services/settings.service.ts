import { Resolve, Router } from '@angular/router';
import { APP_URL } from '../../../shared/constants/url';
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RequestService } from '../../../shared/services/request.service';
import { tap } from 'rxjs/operators';
import { RESPONSE_CODE } from '../../../shared/constants/response';
import { CautionModalFailedRetrieveInfoComponent } from '../../../shared/components/caution-modal-failed-retrieve-info/caution-modal-failed-retrieve-info.component';
import { CommonService } from '../../../shared/services/common.service';


@Injectable()
export class SettingsService implements Resolve<any> {


    constructor(public request: RequestService, public modalController: ModalController, public router: Router,
                private commonService: CommonService) {
    }

    resolve() {

        return this.get();
    }

    get() {
        const userId = JSON.parse(localStorage.getItem('user')).userid;
        return this.request.get(APP_URL.settings.get, { user_id: userId })
            .pipe(tap((res: APIResponse) => {
                    if (res.code === RESPONSE_CODE.SUCCESS) {
                        const settings = res.result.settings;
                        // Transform to boolean
                        settings.map(item => {
                            return item.value = item.value === '1' || item.value === 'true';
                        });
                    } else {
                        this.commonService.presentModal(CautionModalFailedRetrieveInfoComponent);
                        throw Error(res.message);
                    }

                },
                err => {
                    this.commonService.presentModal(CautionModalFailedRetrieveInfoComponent);
                }));
    }

}
