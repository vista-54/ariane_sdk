import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Events, ModalController} from '@ionic/angular';

@Component({
    selector: 'app-caution-invalid-token',
    templateUrl: './caution-invalid-token.component.html',
    styleUrls: ['./../modals.common.scss'],
})
export class CautionInvalidTokenComponent {

    @Input('counter') private counter: number;

    constructor(private modalCtrl: ModalController, public router: Router,
                public events: Events) {
    }


    dismiss() {
        this.modalCtrl.dismiss({
            dismissed: true
        });
        setTimeout(() => {
            this.events.publish('token:error', {});
        }, 500);

        if (this.counter >= 3) {
            this.router.navigate(['sdk/auth/registration']);
        }
    }
}
