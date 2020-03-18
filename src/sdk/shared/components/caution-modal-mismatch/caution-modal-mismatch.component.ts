import { Component, Input } from '@angular/core';
import {ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModalComponent } from '../commonModalComponent';
import { CommonService } from '../../services/common.service';

declare const document;

@Component({
    selector: 'app-caution-modal-mismatch',
    templateUrl: './caution-modal-mismatch.component.html',
    styleUrls: ['./../modals.common.scss'],
})
export class CautionModalMismatchComponent {

    @Input('counter') public counter: any;

    constructor(private modalCtrl: ModalController, public router: Router, public commonService: CommonService) {
        console.log(this.counter);
    }


    dismiss() {
        this.modalCtrl.dismiss({
            dismissed: true
        });
        /**
         * wait when modal will be closed
         */

        setTimeout(() => {
            this.commonService.sendWrongTokenEvent({ event: 'login:error' });
        }, 500);

        if (this.counter >= 3) {
            this.router.navigate(['sdk/auth/registration']);
        }
    }
}
