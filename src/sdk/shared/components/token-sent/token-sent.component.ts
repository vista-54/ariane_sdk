import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CommonModalComponent} from '../commonModalComponent';

declare const document;

@Component({
    selector: 'app-token-sent',
    templateUrl: './token-sent.component.html',
})
export class TokenSentComponent extends CommonModalComponent {

    constructor(modalCtrl: ModalController) {
        super(modalCtrl);
    }
}
