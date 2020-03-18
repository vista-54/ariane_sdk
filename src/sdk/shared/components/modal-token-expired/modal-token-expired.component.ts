import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-modal-token-expired',
    templateUrl: './modal-token-expired.component.html',
    styleUrls: ['./modal-token-expired.component.scss'],
})
export class ModalTokenExpiredComponent implements OnInit {

    constructor(private modalCtrl: ModalController) {
    }

    ngOnInit() {
    }

    dismiss() {
        this.modalCtrl.dismiss({
            dismissed: true
        });
    }
}
