import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SdkComponent} from './sdk.component';
import {HomeSdkComponent} from './home-sdk/home-sdk.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {SdkRouting} from './sdk.routing';
import {TutorialSdkComponent} from './tutorial/tutorial-sdk.component';
import {SdkService} from './shared/sdk.service';

import {ChartSemiCircleComponent} from './shared/components/chart-semi-circle/chart-semi-circle.component';
import {ChangeProgressComponent} from './shared/components/change-progress/change-progress.component';
import {MenuBottomItemComponent} from './shared/components/menu-bottom-item/menu-bottom-item.component';
import {DataPreparationComponent} from './shared/components/data-preparation/data-preparation.component';
import {AboutModalComponent} from './shared/components/about-modal/about-modal.component';
import {ModalResizeDirective} from './shared/components/modal-resize.directive';
import {ActiveTabDirective} from './shared/components/active-tab.directive';
import {RequestService} from './shared/request.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
    declarations: [SdkComponent, HomeSdkComponent, TutorialSdkComponent, ModalResizeDirective, ActiveTabDirective, AboutModalComponent,
        DataPreparationComponent, MenuBottomItemComponent,
        ChartSemiCircleComponent, ChangeProgressComponent],
    imports: [
        CommonModule,
        SdkRouting,
        FormsModule,
        IonicModule,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    entryComponents: [
        AboutModalComponent,
        DataPreparationComponent
    ],
    providers: [
        SdkService,
        RequestService
    ]
})
export class SdkModule {
}
