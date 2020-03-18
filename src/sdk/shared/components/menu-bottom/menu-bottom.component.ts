import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import {InAppBrowserOptions} from '@ionic-native/in-app-browser';

declare const window;

@Component({
    selector: 'app-menu-bottom',
    templateUrl: './menu-bottom.component.html',
    styleUrls: ['./menu-bottom.component.scss'],
})
export class MenuBottomComponent implements OnInit {

    private win: any = window;
    public todo: any;

    constructor(private modalController: ModalController, private iab: InAppBrowser, private webview: WebView) {
        this.todo = localStorage.to_do || null;

    }

    ngOnInit() {
    }


    async tutorial() {
        const src = 'https://app.hptariane.com/tutorial';
        console.log(src);
        const options: InAppBrowserOptions = {
            location: 'no',
            footer: 'yes',
            hardwareback: 'yes',
            usewkwebview: 'yes',
            enableViewportScale: 'yes'
        };
        this.iab.create(src, '_blank', options);
        // browser.on('loadstart').subscribe(event => {
        //     console.log('START LOADING TUTORIAL');
        // });
        // browser.on('loadstop').subscribe(event => {
        //     browser.show();
        // });
        // browser.on('loaderror').subscribe(event => {
        //     console.log(event);
        // });
    }
}
