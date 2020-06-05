import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'app-caution-modal-thirty-inactive',
    templateUrl: './caution-modal-thirty-inactive.component.html',
    styleUrls: ['./../modals.common.scss'],
})
export class CautionModalThirtyInactiveComponent implements OnInit {
    @Input('userid') private userid: number;

    constructor(private modalCtrl: ModalController,
                private router: Router) {
    }

    ngOnInit() {
    }

    dismiss() {
        this.modalCtrl.dismiss({
            dismissed: true
        });
        this.router.navigate(['auth/registration'], {queryParams: {user_id: this.userid}});//for renew need user Id
    }

}
