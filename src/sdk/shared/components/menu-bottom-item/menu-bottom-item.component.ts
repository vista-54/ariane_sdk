import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-menu-bottom-item',
    templateUrl: './menu-bottom-item.component.html',
    styleUrls: ['./menu-bottom-item.component.scss'],
})
export class MenuBottomItemComponent implements OnInit {

    @Input('title') title: string;
    @Input('route') route: string;
    @Input('badge') badge: string;
    @Input('activeIcon') activeIcon: string;
    @Input('inactiveIcon') inactiveIcon: string;

    constructor() {
    }

    ngOnInit() {
    }

}
