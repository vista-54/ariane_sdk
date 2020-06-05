import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { WidgetModel } from '../tabs/shared/models/widget.model';
import { HomeHeaderModel } from '../tabs/shared/models/homeHeader.model';


export declare const navigator;

@Component({
    selector: 'app-home',
    templateUrl: './home-sdk.component.html',
    styleUrls: ['./home-sdk.component.scss'],
})
export class HomeSdkComponent implements OnInit {

    widgets: WidgetModel[];
    header: HomeHeaderModel;
    state: any;
    widgetsParams = {
        'Sales Value': {
            circle: false,
            icon: '../assets/sdk/sales-value.svg',
            title1: 'Sales',
            title2: 'Value'
        },
        'Market Share': {
            circle: true,
            icon: '../assets/sdk/market-share.svg',
            title1: 'Market',
            title2: 'Share'
        },
        'Service Level': {
            circle: true,
            icon: '../assets/sdk/icon_service_level.svg',
            title1: 'Service',
            title2: 'Level'
        },
        'Stock Days': {
            circle: false,
            icon: '../assets/sdk/icon_stock_days.svg',
            title1: 'Stock',
            title2: 'Days'
        },
        'Number of Baskets': {
            circle: false,
            icon: '../assets/sdk/icon_number_of_bucket.svg',
            title1: 'Number',
            title2: 'of Baskets'
        },
        'Promotion Intensity': {
            circle: true,
            icon: '../assets/sdk/icon_promotion.svg',
            title1: 'Promotion',
            title2: 'Intensity'
        }

    };


    constructor(private router: Router, private route: ActivatedRoute) {
        const navigation = this.router.getCurrentNavigation();
        this.state = navigation.extras.state;
        console.log(this.state);
        if (this.route.snapshot.data['data']) {
            const data = this.route.snapshot.data['data'];
            this.widgets = data.result;
            this.header = data.header;
        }
    }

    ngOnInit() {
        console.log('init');
    }


}
