import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToDoInsideComponent} from './to-do-inside.component';
import {ToDoListService} from './shared/services/to-do-list.service';
import {ToDoDetailComponent} from './to-do-detail/to-do-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DirectiveModule} from '../shared/directives/directive.module';
import {ComponentsModule} from '../shared/components/components.module';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {ToDoRouting} from './to-do-routing';
import {ToDoListComponent} from './to-do-list/to-do-list.component';
import {ToDoDetailService} from './shared/services/to-do-detail.service';
import {SharedModule} from '../shared/shared.module';
import {CommonService} from '../shared/services/common.service';


@NgModule({
    declarations: [ToDoInsideComponent, ToDoListComponent, ToDoDetailComponent],
    imports: [
        CommonModule,
        FormsModule,
        ToDoRouting,
        IonicModule,
        RouterModule,
        ReactiveFormsModule,
        ComponentsModule,
        DirectiveModule,
        SharedModule
    ],
    providers: [
        ToDoListService,
        ToDoDetailService,
        CommonService
    ]
})
export class ToDoInsideModule {
}
