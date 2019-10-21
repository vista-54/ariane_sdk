import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {RequestService} from './request.service';
import {APP_URL} from './url';
import {HomeHeaderModel} from './homeHeader.model';
import {WidgetModel} from './widget.model';


declare interface APILoginResponse {
    code: string;
    message: string;
    header: HomeHeaderModel;
    result: WidgetModel[];
}

declare interface LoginParams {
    email: string;
    supplier_id: string;
}

@Injectable()
export class SdkService implements Resolve<any> {


    constructor(public request: RequestService, public modalController: ModalController, public router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        const params: LoginParams = route.queryParams as LoginParams;
        if (params.email || params.supplier_id) {
            return this.login(params);
        }
        else {
            throw Error('Missed required params: email, supplier id');
        }
    }


    public login(data) {
        return this.request.post(APP_URL.sdk.login, data)
            .pipe(tap((res: APILoginResponse) => {
                    console.log(res);
                },
                err => {
                    console.log(err);
                }));
    }

    async presentSelectModal(Component: any) {
        const modal = await this.modalController.create({
            component: Component,
            cssClass: 'selectModal',
        });
        return await modal.present();
    }
}
