import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-to-do-not-saved',
    templateUrl: './to-do-not-saved.component.html',
    styleUrls: ['./../modals.common.scss',
        './to-do-not-saved.component.scss']
})
export class ToDoNotSavedComponent implements OnInit {

    constructor(private modalCtrl: ModalController) {
    }

    dismiss(val) {
        this.modalCtrl.dismiss(val);
    }

    ngOnInit() {
    }

}
