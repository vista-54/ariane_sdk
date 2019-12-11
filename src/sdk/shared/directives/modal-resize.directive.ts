import {AfterViewChecked, Directive, Input} from '@angular/core';

declare const document;

@Directive({
    selector: '[appModalResize]'
})
export class ModalResizeDirective implements AfterViewChecked {
    @Input()
    appModalResize: string;

    constructor() {
    }

    ngAfterViewChecked() {
        const wrappersArr = document.getElementsByClassName('modal-wrapper');
        const wrapper = wrappersArr[wrappersArr.length - 1];
        const buttonH = document.getElementsByClassName('okButton')[0];
        const headerH = document.getElementsByClassName('modalHeader')[0];
        const textH = document.getElementsByClassName('text')[0];
        wrapper.style.height = buttonH.offsetHeight + headerH.offsetHeight + textH.offsetHeight + 60 + 'px';
    }


}
