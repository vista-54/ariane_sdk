import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

export const ALERT_PARAMS = {
    'Market Share': {
        icon: '../assets/todo/todo_market_share.svg',
        style: 'market_share',
        title: 'market<br>share',
        detail: 'shares'
    },
    'Sales Value': {
        icon: '../assets/todo/todo_sales.svg',
        style: 'sales',
        title: 'sales<br>value',
        detail: 'sales'
    },
    'Service Level': {
        icon: '../assets/todo/todo_service_level.svg',
        style: 'service_level',
        title: 'service<br> level',
        detail: 'services'

    },
    'Stock Days': {
        icon: '../assets/todo/todo_stock_days.svg',
        style: 'stock_days',
        title: 'stock<br> days',
        detail: 'stocks'

    },
    'Number of Baskets': {
        icon: '../assets/todo/todo_numbers_of_basket.svg',
        style: 'number_of_basket',
        title: 'number<br> of basket',
        detail: 'baskets'

    },
    'Promotion Intensity': {
        icon: '../assets/todo/todo_promo.svg',
        style: 'promotion_intensity',
        title: 'promo',
        detail: 'promotions'

    }
};

@Component({
    selector: 'app-store-alert-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})


export class MainComponent implements OnInit {

    public prop: any;
    public params: any;
    alerts = ALERT_PARAMS;
    user: any;

    constructor(private route: ActivatedRoute) {
        this.user = JSON.parse(localStorage.user);
        this.params = {};
        if (this.route.snapshot.data['data']) {
            this.prop = this.route.snapshot.data['data'];
            console.log(this.prop);
        }
    }

    ngOnInit() {
        this.params.channel = this.route.snapshot.queryParams['channel'];
        this.params.name = this.route.snapshot.queryParams['name'];
        this.params.store_id = this.route.snapshot.queryParams['store_id'];
    }

}
