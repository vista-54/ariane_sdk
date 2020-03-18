import { ModalController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class CommonService {

    private wrongTokenEvent = new Subject<any>();

    constructor(private modalController: ModalController) {
    }


    public sendWrongTokenEvent(data: object) {
        this.wrongTokenEvent.next(data)
    }

    public getWrongTokenEvent(): Observable<any> {
        return this.wrongTokenEvent.asObservable();
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
            componentProps: { prop }
        });
        return await modal.present();
    }
}
