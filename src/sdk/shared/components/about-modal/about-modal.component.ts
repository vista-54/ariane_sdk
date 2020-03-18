import {Component, OnInit} from '@angular/core';
import {CommonModalComponent} from '../commonModalComponent';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-about-modal',
    templateUrl: './about-modal.component.html',
    styleUrls: ['./../modals.common.scss'],
})
export class AboutModalComponent extends CommonModalComponent implements OnInit {

    constructor(modalCtrl: ModalController) {
        super(modalCtrl);
    }

    ngOnInit() {
    }

}
