import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';

export declare const navigator;

@Component({
    selector: 'app-server-error-modal',
    templateUrl: './server-error-modal.component.html',
    styleUrls: ['./../modals.common.scss'],
})
export class ServerErrorModalComponent {

    constructor(private modalCtrl: ModalController) {
    }

    dismiss() {
        this.modalCtrl.dismiss({
            dismissed: true
        });
        navigator['app'].exitApp();
    }
}
