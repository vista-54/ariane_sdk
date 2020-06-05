import {ModalController} from '@ionic/angular';
import {Injectable} from '@angular/core';
import {Subject, Observable} from 'rxjs';
import {APP_URL} from '../constants/url';
import {tap} from 'rxjs/operators';
import {RESPONSE_CODE} from '../constants/response';
import {TokenSentComponent} from '../components/token-sent/token-sent.component';
import {CautionModalFailedRetrieveInfoComponent} from '../components/caution-modal-failed-retrieve-info/caution-modal-failed-retrieve-info.component';
import {RequestService} from './request.service';

@Injectable()
export class CommonService {

    private wrongTokenEvent = new Subject<any>();

    constructor(private modalController: ModalController, private request: RequestService) {
    }


    public sendWrongTokenEvent(data: object) {
        this.wrongTokenEvent.next(data);
    }

    public getWrongTokenEvent(): Observable<any> {
        return this.wrongTokenEvent.asObservable();
    }

    public getContactDetails(userId) {
        return this.request.get(APP_URL.auth.contact, {user_id: userId})
            .pipe(tap(res => {

            }));
    }

    public sendContactDetails(data) {
        return this.request.post(APP_URL.auth.contact_submit, data)
            .pipe(tap((res: APIResponse) => {

            }));
    }


    public async presentModal(component, prop?: any) {
        const modal = await this.modalController.create({
            component,
            cssClass: 'shareModal',
            componentProps: prop
        });
        return await modal.present();
    }

    async presentSelectModal(Component: any, prop?: any) {
        const modal = await this.modalController.create({
            component: Component,
            cssClass: 'selectModal',
            componentProps: {prop}
        });
        return await modal.present();
    }
}
