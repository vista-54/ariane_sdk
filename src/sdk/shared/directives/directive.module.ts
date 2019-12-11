import { NgModule } from '@angular/core';
import { ResizeTextareaDirective } from './resize-textarea';
import { HeaderDirective } from './header.directive';
import { ModalResizeDirective } from './modal-resize.directive';
import { KeyboardDirective } from './keyboard.directive';
import { ActiveTabDirective } from './active-tab.directive';

@NgModule({
    declarations: [
        ResizeTextareaDirective,
        HeaderDirective,
        ModalResizeDirective,
        KeyboardDirective,
        ActiveTabDirective,
    ],
    exports: [
        ResizeTextareaDirective,
        ModalResizeDirective,
        KeyboardDirective,
        ActiveTabDirective
    ],
})

export class DirectiveModule { }
