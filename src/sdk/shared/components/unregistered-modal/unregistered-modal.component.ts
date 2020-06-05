import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {CommonModalComponent} from '../commonModalComponent';

export declare const document;

@Component({
    selector: 'app-unregistered-modal',
    templateUrl: './unregistered-modal.component.html',
    styleUrls: ['./../modals.common.scss'],
})
export class UnregisteredModalComponent extends CommonModalComponent {

    constructor(public modalCtrl: ModalController, private router: Router) {
        super(modalCtrl);
    }

    dismiss() {
        this.modalCtrl.dismiss({
            dismissed: true
        });
        this.router.navigate(['auth/registration']);
    }

}
