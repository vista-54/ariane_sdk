import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';

export declare const navigator;

@Component({
    selector: 'app-registration-success',
    templateUrl: './registration-success.component.html',
    styleUrls: ['./../modals.common.scss'],
})
export class RegistrationSuccessComponent {

    constructor(private modalCtrl: ModalController) {
    }

    dismiss() {
        this.modalCtrl.dismiss({
            dismissed: true
        });
        navigator['app'].exitApp();
    }
}
