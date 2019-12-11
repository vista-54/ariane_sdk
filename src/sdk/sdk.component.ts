import {Component, ViewChild} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {TranslateService} from '@ngx-translate/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';

export declare const window: any;

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class SdkComponent {
    @ViewChild('content', {static: true}) public content: any;

    constructor(private platform: Platform,
                private splashScreen: SplashScreen,
                private statusBar: StatusBar,
                public translate: TranslateService,
                private geolocation: Geolocation) {
        this.initializeApp();

    }

    initializeApp() {
        console.log('inited')
        this.translate.setDefaultLang('en');
        this.translate.use('en');
        this.platform.ready().then(() => {
            this.saveGeoPosition();
            this.statusBar.styleLightContent();
            this.statusBar.overlaysWebView(false);
            this.statusBar.backgroundColorByName('black');
            this.splashScreen.hide();
        });
    }

    saveGeoPosition() {
        this.geolocation.getCurrentPosition().then((resp) => {
            const data = {
                lat: resp.coords.latitude,
                lng: resp.coords.longitude
            };
            localStorage.setItem('coords', JSON.stringify(data));
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }


}
