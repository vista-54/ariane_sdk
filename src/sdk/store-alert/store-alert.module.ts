import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ComponentsModule} from '../shared/components/components.module';
import {DirectiveModule} from '../shared/directives/directive.module';
import {StoreAlertRouting} from './store-alert-routing';
import {StoreAlertComponent} from './store-alert.component';
import {StoreAlertService} from './shared/store-alert.service';
import {StoreAlertDetailComponent} from './detail/store-alert-detail.component';
import {AlertDetailService} from './shared/alert-detail.service';
import {ReportService} from './shared/report.service';
import {ReportComponent} from './report/report.component';
import {CreateToDoComponent} from './create-to-do/create-to-do.component';
import {SharedModule} from '../shared/shared.module';
import {CreateToDoService} from './shared/create-to-do.service';
import {ToDoNotSavedComponent} from '../shared/components/to-do-not-saved/to-do-not-saved.component';
import {CommonService} from '../shared/services/common.service';
import {IsToDoSaved} from './shared/guards/isToDoSaved';


@NgModule({
    declarations: [MainComponent, StoreAlertComponent, StoreAlertDetailComponent, ReportComponent, CreateToDoComponent,
        ToDoNotSavedComponent],
    imports: [
        CommonModule,
        FormsModule,
        StoreAlertRouting,
        IonicModule,
        RouterModule,
        ReactiveFormsModule,
        ComponentsModule,
        DirectiveModule,
        SharedModule
    ],
    entryComponents: [
        ToDoNotSavedComponent
    ],
    providers: [
        StoreAlertService,
        AlertDetailService,
        ReportService,
        CreateToDoService,
        CommonService,
        IsToDoSaved
    ]
})
export class StoreAlertModule {
}
