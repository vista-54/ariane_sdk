import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-change-progress',
    templateUrl: './change-progress.component.html',
    styleUrls: ['./change-progress.component.scss'],
})
export class ChangeProgressComponent implements OnInit {
    @Input('growth') growth: number;

    constructor() {
    }

    ngOnInit() {
    }

    getClassForArrow(growth) {
        const value = parseFloat(growth);
        if (value > 0) {
            return 'grow_up grow_up_arrow';
        } else if (value < 0) {
            return 'grow_down';
        }
    }

    getClassForBar(growth) {
        const value = parseFloat(growth);
        if (value > 0) {
            return 'grow_up';
        } else if (value < 0) {
            return 'grow_down';
        }
    }

    getValue(growth) {
        const value = parseFloat(growth);
        if (!value) {
            return 0;
        }
        if (value < 0) {
            growth = growth * -1;
        }
        return growth / 100;
    }
}
