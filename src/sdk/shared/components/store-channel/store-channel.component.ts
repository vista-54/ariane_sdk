import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-store-channel',
    templateUrl: './store-channel.component.html',
    styleUrls: ['./store-channel.component.scss'],
})
export class StoreChannelComponent implements OnInit {
    @Input('store') public store: any;
    @Input('channel') public channel: any;

    constructor() {
    }

    ngOnInit() {
    }

}
