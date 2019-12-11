import {APP_URL} from '../../../shared/constants/url';
import {Injectable} from '@angular/core';
import {RequestService} from '../../../shared/services/request.service';
import {tap} from 'rxjs/operators';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {CautionModalMismatchComponent} from '../../../shared/components/caution-modal-mismatch/caution-modal-mismatch.component';
import {CautionModalExpiredComponent} from '../../../shared/components/caution-modal-expired/caution-modal-expired.component';
import {RESPONSE_CODE_LOGIN, RESPONSE_CODE_VERIFY_TOKEN} from '../../../shared/constants/response_code';
import {TokenSentComponent} from '../../../shared/components/token-sent/token-sent.component';
import {RegistrationSuccessComponent} from '../../../shared/components/registration-success/registration-success.component';
import {LoginResponse, RegisterResponse, VerifyTokenResponse} from '../../../shared/interfaces/response';
import {UnregisteredModalComponent} from '../../../shared/components/unregistered-modal/unregistered-modal.component';
import {CautionModalMissedComponent} from '../../../shared/components/caution-modal-missed/caution-modal-missed.component';
import {CautionModalThirtyInactiveComponent} from '../../../shared/components/caution-modal-thirty-inactive/caution-modal-thirty-inactive.component';
import {CautionModalNoMobileComponent} from '../../../shared/components/caution-modal-no-mobile/caution-modal-no-mobile.component';
import {CautionModalFailedRetrieveInfoComponent} from '../../../shared/components/caution-modal-failed-retrieve-info/caution-modal-failed-retrieve-info.component';
import {CautionInvalidTokenComponent} from '../../../shared/components/caution-invalid-token/caution-invalid-token.component';
import {CautionInvalidTokenMultitimeComponent} from '../../../shared/components/caution-invalid-token-multitime/caution-invalid-token-multitime.component';
import {ModalReactivationSuccessComponent} from '../../../shared/components/modal-reactivation-success/modal-reactivation-success.component';
import {LoginModel} from '../models/login.model';
import {VerifyTokenModel} from '../models/verifyToken.model';
import {RESPONSE_CODE} from '../../../shared/constants/response';
import {RequestTokenModel} from '../models/requestToken.model';
import {CommonService} from '../../../shared/services/common.service';
import {SettingsModel} from '../../../shared/models/settings.model';


@Injectable()
export class AuthService implements Resolve<any> {


    private errorCounterLogin = 0;
    private errorCounterToken = 0;

    constructor(public request: RequestService, public modalController: ModalController,
                public router: Router, private commonService: CommonService) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        const userId = route.queryParams['user_id'];
        if (userId) {
            return this.getUserInfoById(userId);
        }
    }

    getUserInfoById(userId) {
        return this.request.get(APP_URL.user.get, {user_id: userId})
            .pipe(tap((res: LoginResponse) => {
            }));
    }

    /**
     *
     * @param {LoginModel} data
     * @returns {Observable<any>}
     */
    login(data: LoginModel) {
        return this.request.post(APP_URL.auth.login, data)
            .pipe(tap((response: LoginResponse) => {
                switch (response.code) {
                    case RESPONSE_CODE_LOGIN.SUCCESS:
                        response.info.email = data.email;
                        localStorage['user'] = JSON.stringify(response.info);
                        localStorage['jwt'] = response.jwt;
                        break;
                    case RESPONSE_CODE_LOGIN.UNREGISTERED_SUPPLIER:
                        this.commonService.presentModal(UnregisteredModalComponent);
                        break;
                    case RESPONSE_CODE_LOGIN.CREDENTIALS_MISMATCH:
                        this.errorCounterLogin++;
                        this.commonService.presentModal(CautionModalMismatchComponent, {counter: this.errorCounterLogin});
                        break;
                    case RESPONSE_CODE_LOGIN.MISSED_REQUIRED_INFO:
                        this.commonService.presentModal(CautionModalMissedComponent);
                        break;
                    case RESPONSE_CODE_LOGIN.THIRTY_DAYS_INACTIVE:
                        this.commonService.presentModal(CautionModalThirtyInactiveComponent, {userid: response.userid});
                        break;
                    case RESPONSE_CODE_LOGIN.NO_MOBILE_ACCESS:
                        this.commonService.presentModal(CautionModalNoMobileComponent);
                        break;
                    case RESPONSE_CODE_LOGIN.FAILED_RETRIEVE_INFO:
                        this.commonService.presentModal(CautionModalFailedRetrieveInfoComponent);
                        break;
                    case RESPONSE_CODE_LOGIN.SUBSCRIPTION_EXPIRED:
                        this.commonService.presentModal(CautionModalExpiredComponent);
                        break;
                    default:
                        this.commonService.presentModal(CautionModalFailedRetrieveInfoComponent);
                        break;
                }
            }));
    }

    requestToken(data: RequestTokenModel) {
        return this.request.post(APP_URL.auth.request_token, data)
            .pipe(tap((res: APIResponse) => {
                switch (res.code) {
                    case RESPONSE_CODE.SUCCESS:
                        this.commonService.presentModal(TokenSentComponent);
                        break;
                    default:
                        this.commonService.presentModal(CautionModalFailedRetrieveInfoComponent);
                        break;
                }
            }));
    }

    verifyToken(data: VerifyTokenModel) {
        return this.request.post(APP_URL.auth.verify, data)
            .pipe(tap((res: VerifyTokenResponse) => {
                switch (res.code) {
                    case RESPONSE_CODE.SUCCESS:
                        localStorage['settings'] = JSON.stringify(res.settings);
                        break;
                    case RESPONSE_CODE_VERIFY_TOKEN.TOKEN_EXPIRED:
                        this.errorCounterToken++;
                        if (this.errorCounterToken === 3) {
                            this.commonService.presentModal(CautionInvalidTokenMultitimeComponent);
                        } else {
                            this.commonService.presentModal(CautionInvalidTokenComponent);
                        }
                        break;
                    default:
                        this.commonService.presentModal(CautionModalFailedRetrieveInfoComponent);
                        break;
                }
            }));
    }

    settingsUpdate(data: SettingsModel) {
        return this.request.post(APP_URL.auth.settings_update, data)
            .pipe(tap(() => {
            }));
    }

    register(data) {
        return this.request.post(APP_URL.auth.register, data)
            .pipe(tap((res: RegisterResponse) => {
                switch (res.code) {
                    case RESPONSE_CODE.SUCCESS:
                        this.commonService.presentModal(RegistrationSuccessComponent);
                        break;
                    default:
                        this.commonService.presentModal(CautionModalFailedRetrieveInfoComponent);
                        break;
                }
            }));
    }

    reactivate(data) {
        return this.request.post(APP_URL.auth.reactivate, data)
            .pipe(tap((res: RegisterResponse) => {
                switch (res.code) {
                    case RESPONSE_CODE.SUCCESS:
                        this.commonService.presentModal(ModalReactivationSuccessComponent);
                        break;
                    default:
                        this.commonService.presentModal(CautionModalFailedRetrieveInfoComponent);
                        break;
                }
            }));
    }


}
