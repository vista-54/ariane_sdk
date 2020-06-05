import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CommonModalComponent} from '../commonModalComponent';

declare const document;

@Component({
    selector: 'app-token-sent',
    templateUrl: './token-sent.component.html',
})
export class TokenSentComponent extends CommonModalComponent {
    public date:string
    constructor(modalCtrl: ModalController) {
        super(modalCtrl);
        const date = new Date();
        const unformattedDate= new Date(date.setMonth(date.getMonth()+1));
        this.date = unformattedDate.toLocaleDateString()
        this.date = this.date.replace(/\./g, "/");
    }
}
