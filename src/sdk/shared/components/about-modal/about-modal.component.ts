import {Component, OnInit} from '@angular/core';
import {ModalController, Platform} from '@ionic/angular';

@Component({
    selector: 'app-about-modal',
    templateUrl: './about-modal.component.html',
    styleUrls: ['./about-modal.component.scss'],
})
export class AboutModalComponent implements OnInit {

    linkIos: string;
    linkAndroid: string;
    isAndroid = false;
    isOs = false;

    constructor(private modalCtrl: ModalController, public platform: Platform) {
        this.linkIos = 'https://apps.apple.com/tt/app/hpt-ariane/id1481638953?ign-mpt=uo%3D2';
        this.linkAndroid = 'https://play.google.com/store/apps/details?id=ariane.semperteam';

    }

    ngOnInit() {
        this.isAndroid = this.platform.is('android');
        this.isOs = this.platform.is('ios');
    }

    dismiss() {
        this.modalCtrl.dismiss({
            dismissed: true
        });
    }

}
