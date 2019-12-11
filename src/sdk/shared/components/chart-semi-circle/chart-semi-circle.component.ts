import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-chart-semi-circle',
    templateUrl: './chart-semi-circle.component.html',
    styleUrls: ['./chart-semi-circle.component.scss'],
})
export class ChartSemiCircleComponent implements OnInit {

    @Input('growth') growth: number;
    @Input('unit') unit: string;

    images = {
        gray: '../assets/icon/arrow.svg',
        green: '../assets/icon/arrow_green.svg',
        red: '../assets/icon/arrow_red.svg',
    };

    constructor() {
    }

    ngOnInit() {
    }

    getArrow(grow) {
        const value = parseFloat(grow);
        if (value < 0) {
            return this.images.red;
        } else if (value > 0) {
            return this.images.green;
        }
        return this.images.gray;
    }

}
