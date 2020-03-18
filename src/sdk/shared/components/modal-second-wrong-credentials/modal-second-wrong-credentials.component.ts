import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
declare const document;

@Component({
    selector: 'app-modal-second-wrong-credentials',
    templateUrl: './modal-second-wrong-credentials.component.html',
    styleUrls: ['./../modals.common.scss'],
})
export class ModalSecondWrongCredentialsComponent {

    constructor(private modalCtrl: ModalController, public router: Router) {
    }


    dismiss() {
        this.modalCtrl.dismiss({
            dismissed: true
        });

    }

}
