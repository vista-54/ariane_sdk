import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CommonService } from '../../services/common.service';

@Component({
    selector: 'app-caution-invalid-token',
    templateUrl: './caution-invalid-token.component.html',
    styleUrls: ['./../modals.common.scss'],
})
export class CautionInvalidTokenComponent {

    @Input('counter') private counter: number;

    constructor(private modalCtrl: ModalController, public router: Router,
        public commonService: CommonService) {
    }


    dismiss() {
        this.modalCtrl.dismiss({
            dismissed: true
        });
        setTimeout(() => {
            this.commonService.sendWrongTokenEvent({ event: 'token:error' });
        }, 500);

        if (this.counter >= 3) {
            this.router.navigate(['sdk/auth/registration']);
        }
    }
}
