import {AfterViewChecked, Directive, ElementRef, Input} from '@angular/core';

@Directive({
    selector: '[appActiveTab]'
})
export class ActiveTabDirective implements AfterViewChecked {

    @Input() appActiveTab: string;
    @Input('inactiveTab') inactiveTab: string;

    constructor(private el: ElementRef) {
        console.log('inactiveTab');
    }


    ngAfterViewChecked() {
        if (this.el.nativeElement.className.indexOf('active_route') !== -1) {
            const img = this.el.nativeElement.children[0];
            img.src = this.appActiveTab;
        } else {
            const img = this.el.nativeElement.children[0];
            img.src = this.inactiveTab;
        }
    }
}
