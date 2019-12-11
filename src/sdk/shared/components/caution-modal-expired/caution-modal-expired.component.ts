import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CommonModalComponent} from '../commonModalComponent';

declare const navigator;

@Component({
    selector: 'app-caution-modal-expired',
    templateUrl: './caution-modal-expired.component.html',
    styleUrls: ['./../modals.common.scss'],
})
export class CautionModalExpiredComponent extends CommonModalComponent {

    constructor(modalCtrl: ModalController) {
        super(modalCtrl);
    }

    dismiss() {
        navigator['app'].exitApp();
    }


}
