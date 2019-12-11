import {Directive, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';

declare const window;

@Directive({
    selector: '[appKeyboard]'
})
export class KeyboardDirective  {

    @Input()
    appKeyboard: string;
    addClick: any;
    rmClick: any;

    constructor(private el: ElementRef) {
        // this.addClick = () => this.addKeyboardClass();
        // this.rmClick = () => this.rmKeyboardClass();

    }
    //
    // addKeyboardClass() {
    //     this.el.nativeElement.classList.remove('nokeyboard');
    //     this.el.nativeElement.classList.add('keyboard');
    // }
    //
    // rmKeyboardClass() {
    //     this.el.nativeElement.classList.remove('keyboard');
    //     this.el.nativeElement.classList.add('nokeyboard');
    // }
    //
    // ngOnInit() {
    //     console.log('loaded');
    //     window.addEventListener('keyboardWillShow', this.addClick);
    //     window.addEventListener('keyboardWillHide', this.rmClick);
    // }
    //
    // ngOnDestroy() {
    //     window.removeEventListener('keyboardWillShow', this.addClick);
    //     window.removeEventListener('keyboardWillHide', this.rmClick);
    // }

}
