import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {Injectable} from '@angular/core';
import {RequestService} from '../../../shared/services/request.service';
import {APP_URL} from '../../../shared/constants/url';
import {tap} from 'rxjs/operators';
import {HomeResponse} from '../../../shared/interfaces/response';
import {AccessDaniedComponent} from '../../../shared/components/access-danied/access-danied.component';
import {CautionModalFailedRetrieveInfoComponent} from '../../../shared/components/caution-modal-failed-retrieve-info/caution-modal-failed-retrieve-info.component';
import {HomeRequestModel} from '../../../auth/shared/models/homeRequest.model';
import {RESPONSE_CODE} from '../../../shared/constants/response';
import {CommonService} from '../../../shared/services/common.service';

@Injectable()
export class HomeService {


    constructor(public request: RequestService, public modalController: ModalController, public router: Router,
                private commonService: CommonService) {
    }

    get(data: HomeRequestModel) {
        return this.request.get(APP_URL.homepage.get, data, false, true)
            .pipe(tap((res: HomeResponse) => {
                switch (res.code) {
                    case RESPONSE_CODE.SUCCESS:
                        localStorage.setItem('home', JSON.stringify(res.result));
                        localStorage.setItem('home_header', JSON.stringify(res.header));
                        localStorage.setItem('to_do', JSON.stringify(res['to-do']));
                        break;
                    default:
                        this.commonService.presentModal(CautionModalFailedRetrieveInfoComponent);
                        break;
                }
            }));


    }
    datascope(type, data) {
        return this.request.get(APP_URL.datascope[type], data)
            .pipe(tap((res: APIResponse) => {
                    switch (res.code) {
                        case RESPONSE_CODE.SUCCESS:
                            res.result.map(item => {
                                item.select = item.select === 'selected';
                            });
                            break;
                        case RESPONSE_CODE.NO_PERMISSIONS:
                            this.commonService.presentModal(AccessDaniedComponent, {target: 'Data Scope'});
                            throw Error(res.message);
                        default:
                            this.commonService.presentModal(CautionModalFailedRetrieveInfoComponent);
                            throw Error(res.message);
                    }
                }
            ));
    }

    scopeUpdate(data) {
        return this.request.post(APP_URL.datascope.update, data).pipe(tap((res) => {
            console.log(res);
        }));
    }

}
