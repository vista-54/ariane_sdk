import {Component} from '@angular/core';
import {CommonModalComponent} from '../commonModalComponent';
import {ModalController} from '@ionic/angular';
export declare const navigator;

@Component({
    selector: 'app-caution-invalid-token-multitime',
    templateUrl: './caution-invalid-token-multitime.component.html',
    styleUrls: ['./../modals.common.scss'],
})
export class CautionInvalidTokenMultitimeComponent extends CommonModalComponent {

    constructor(modal: ModalController) {
        super(modal);
    }


    dismiss() {
        navigator['app'].exitApp();
    }

}
