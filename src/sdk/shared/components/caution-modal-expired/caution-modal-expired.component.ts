import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CommonModalComponent} from '../commonModalComponent';
import {Router} from '@angular/router';

declare const navigator;

@Component({
    selector: 'app-caution-modal-expired',
    templateUrl: './caution-modal-expired.component.html',
    styleUrls: ['./../modals.common.scss'],
})
export class CautionModalExpiredComponent extends CommonModalComponent {

    constructor(public modalCtrl: ModalController, private router: Router) {
        super(modalCtrl);
    }

    token() {
        this.router.navigate(['auth/more-info']);
        setTimeout(() => {
            this.dismiss();
        }, 500);
    }

    renew() {
        window.location.href = 'https://www.myanmar-retail-platform.com/app/app-quote';
    }

}
