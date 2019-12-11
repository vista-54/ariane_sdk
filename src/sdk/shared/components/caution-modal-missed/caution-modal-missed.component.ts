import {Component} from '@angular/core';
import {CommonModalComponent} from '../commonModalComponent';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-caution-modal-missed',
    templateUrl: './caution-modal-missed.component.html',
    styleUrls: ['./../modals.common.scss'],
})
export class CautionModalMissedComponent extends CommonModalComponent {

    constructor(modal: ModalController) {
        super(modal);
    }
}

