import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-store-alert',
    templateUrl: './store-alert.component.html',
    styleUrls: ['./store-alert.component.scss'],
})
export class StoreAlertComponent implements OnInit {

    constructor(private translate: TranslateService) {
        translate.use('en');
    }

    ngOnInit() {
    }

}
