import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-to-do-inside',
    templateUrl: './to-do-inside.component.html',
    styleUrls: ['./to-do-inside.component.scss'],
})
export class ToDoInsideComponent implements OnInit {

    constructor(private translate: TranslateService) {
        translate.use('en');
    }

    ngOnInit() {
    }

}
