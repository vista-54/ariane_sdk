import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-modal-reactivation-success',
    templateUrl: './modal-reactivation-success.component.html',
    styleUrls: ['./../modals.common.scss'],
})
export class ModalReactivationSuccessComponent implements OnInit {

    constructor(private router: Router, private modalCtrl: ModalController) {
    }

    ngOnInit() {
    }

    dismiss() {
        this.modalCtrl.dismiss({
            dismissed: true
        });
        this.router.navigate(['auth/info1']);
    }
}
