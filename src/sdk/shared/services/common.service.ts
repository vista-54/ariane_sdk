import {ModalController} from '@ionic/angular';
import {Injectable} from '@angular/core';

@Injectable()
export class CommonService {

    constructor(private modalController: ModalController) {
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
