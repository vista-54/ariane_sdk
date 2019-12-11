import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CommonModalComponent} from '../commonModalComponent';

export declare const navigator;

@Component({
    selector: 'app-caution-modal-no-mobile',
    templateUrl: './caution-modal-no-mobile.component.html',
    styleUrls: ['./../modals.common.scss'],
})
export class CautionModalNoMobileComponent extends CommonModalComponent {

    constructor(modal: ModalController) {
        super(modal);
    }

    dismiss() {
        navigator['app'].exitApp();
    }
}
