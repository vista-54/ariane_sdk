import {Component, OnInit} from '@angular/core';
import {CommonModalComponent} from '../commonModalComponent';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-modal-your-team',
    templateUrl: './modal-your-team.component.html',
    styleUrls: ['./../modals.common.scss'],
})
export class ModalYourTeamComponent extends CommonModalComponent implements OnInit {

    constructor(modalCtrl: ModalController) {
        super(modalCtrl);
    }

    ngOnInit() {
    }

}
