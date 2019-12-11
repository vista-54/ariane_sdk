import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';

export declare const navigator;

@Component({
    selector: 'app-caution-modal-failed-retrieve-info',
    templateUrl: './caution-modal-failed-retrieve-info.component.html',
    styleUrls: ['./../modals.common.scss'],
})
export class CautionModalFailedRetrieveInfoComponent {

    constructor(private modalCtrl: ModalController) {
    }

    dismiss() {
        this.modalCtrl.dismiss({
            dismissed: true
        });
        navigator['app'].exitApp();
    }
}
