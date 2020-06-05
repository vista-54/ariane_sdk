import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-well-done',
    templateUrl: './well-done.component.html',
    styleUrls: ['./well-done.component.scss'],
})
export class WellDoneComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
        setTimeout(() => {
            this.goHomepage()
        }, 2000)
    }

    goHomepage() {
        this.router.navigate(['sdk/tabs/home']);
    }

}
