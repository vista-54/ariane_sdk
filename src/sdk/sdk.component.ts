import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {ModalController} from '@ionic/angular';
import {AboutModalComponent} from './shared/components/about-modal/about-modal.component';

export declare const navigator;

@Component({
    selector: 'app-home',
    templateUrl: './sdk.component.html',
    styleUrls: ['./sdk.component.scss'],
})
export class SdkComponent implements OnInit {


    constructor(private router: Router, private modalController: ModalController) {

    }

    ngOnInit() {
        console.log('init');
    }

    leave() {
        navigator['app'].exitApp();
    }

    about() {
        this.presentModal(AboutModalComponent);
    }

    private async presentModal(component) {
        const modal = await this.modalController.create({
            component,
            cssClass: 'shareModal',
        });
        return await modal.present();
    }


}
