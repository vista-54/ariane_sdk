
import {Component, OnInit} from '@angular/core';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {Router} from '@angular/router';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
    isAccepted = false;
    isPPAccepted: boolean;

    constructor(private iab: InAppBrowser,
                private router: Router) {
        this.isPPAccepted = JSON.parse(localStorage.getItem('pp_accepted')) as boolean;
        if (this.isPPAccepted) {
            this.isAccepted = true;
        }
    }

    ngOnInit() {
    }

    openLink(link) {
        this.iab.create(link, '_system');
    }  

    login(){
        this.router.navigate(['sdk/auth/login']);
    }

    next() {
        localStorage.setItem('pp_accepted', JSON.stringify(true));
        this.router.navigate(['sdk/auth/info1']);
    }
}
