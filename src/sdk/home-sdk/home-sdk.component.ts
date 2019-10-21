import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {WidgetModel} from '../shared/widget.model';
import {HomeHeaderModel} from '../shared/homeHeader.model';

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
