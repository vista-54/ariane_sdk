import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-subscription-upgrade',
    templateUrl: './subscription-upgrade.component.html',
    styleUrls: ['./subscription-upgrade.component.scss'],
})
export class SubscriptionUpgradeComponent implements OnInit {
    @Input() url: string;

    constructor(private sanitizer: DomSanitizer, private modalCtrl: ModalController) {
    }

    ngOnInit() {
        console.log(this.url);
    }

    getUrl() {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }

    dismiss() {
        setTimeout(() => {
            this.modalCtrl.dismiss({
                dismissed: true
            });
        }, 500);

    }
}
