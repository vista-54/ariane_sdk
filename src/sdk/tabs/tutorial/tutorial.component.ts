import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
    selector: 'app-tutorial',
    templateUrl: './tutorial.component.html',
    styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {


    url: SafeResourceUrl;

    constructor(modalCtrl: ModalController,
                private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
    }

    getUrl() {
        return this.sanitizer.bypassSecurityTrustResourceUrl('https://app.hptariane.com/tutorial');
    }


}
