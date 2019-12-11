import {Component, OnDestroy, OnInit} from '@angular/core';

declare const document;

@Component({
    selector: 'app-data-preparation',
    templateUrl: './data-preparation.component.html',
    styleUrls: ['./data-preparation.component.scss'],
})
export class DataPreparationComponent implements OnInit, OnDestroy {
    inactiveImage = '../assets/auth/shopping-cart-2.svg';
    interval: any;

    constructor() {
    }

    ngOnInit() {
    }

    ionViewDidEnter() {
        this.startInterval();
    }

    startInterval() {
        const activeImage = '../assets/auth/shopping-cart-1.svg';
        const images = document.getElementsByClassName('cart');
        let counter = 0;
        this.interval = setInterval(() => {
            if (counter > 4) {
                counter = 0;
            }
            const obj = images[counter];
            if (typeof obj !== 'undefined') {
                obj.setAttribute('src', activeImage);
            } else {
                clearInterval(this.interval);
            }
            counter++;
            if (counter === 4) {
                clearInterval(this.interval);
                counter = 0;
                setTimeout(() => {
                    this.setDefaultImage(images);
                }, 500);
            }
        }, 500);
    }

    setDefaultImage(images) {
        for (let i = 0; i < images.length; i++) {
            const obj = images[i];
            obj.setAttribute('src', this.inactiveImage);
        }
        this.startInterval();
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }

}
