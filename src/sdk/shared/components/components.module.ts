import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared.module';
import {IonicModule} from '@ionic/angular';
import {CautionModalMismatchComponent} from './caution-modal-mismatch/caution-modal-mismatch.component';
import {CautionModalExpiredComponent} from './caution-modal-expired/caution-modal-expired.component';
import {HeaderComponent} from './header/header.component';
import {TokenSentComponent} from './token-sent/token-sent.component';
import {RegistrationSuccessComponent} from './registration-success/registration-success.component';
import {UnregisteredModalComponent} from './unregistered-modal/unregistered-modal.component';
import {DirectiveModule} from '../directives/directive.module';
import {CautionModalMissedComponent} from './caution-modal-missed/caution-modal-missed.component';
import {CautionModalThirtyInactiveComponent} from './caution-modal-thirty-inactive/caution-modal-thirty-inactive.component';
import {CautionModalNoMobileComponent} from './caution-modal-no-mobile/caution-modal-no-mobile.component';
import {CautionModalFailedRetrieveInfoComponent} from './caution-modal-failed-retrieve-info/caution-modal-failed-retrieve-info.component';
import {DataPreparationComponent} from './data-preparation/data-preparation.component';
import {CautionInvalidTokenComponent} from './caution-invalid-token/caution-invalid-token.component';
import {CautionInvalidTokenMultitimeComponent} from './caution-invalid-token-multitime/caution-invalid-token-multitime.component';
import {ModalReactivationSuccessComponent} from './modal-reactivation-success/modal-reactivation-success.component';
import {ChartSemiCircleComponent} from './chart-semi-circle/chart-semi-circle.component';
import {ChangeProgressComponent} from './change-progress/change-progress.component';
import {DatascopeComponent} from './datascope/datascope.component';
import {HomeService} from '../../tabs/shared/services/home.service';
import {SelectModalComponent} from './select-modal/select-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MenuBottomComponent} from './menu-bottom/menu-bottom.component';
import {HeaderInsideTabsComponent} from './header-inside-tabs/header-inside-tabs.component';
import {ModalYourTeamComponent} from './modal-your-team/modal-your-team.component';
import {MenuBottomItemComponent} from './menu-bottom-item/menu-bottom-item.component';
import {SingleSelectModalComponent} from './single-select-modal/single-select-modal.component';
import {AlertTitleComponent} from './alert-title/alert-title.component';
import {StoreChannelComponent} from './store-channel/store-channel.component';
import {AboutModalComponent} from './about-modal/about-modal.component';
import {AccessDaniedComponent} from './access-danied/access-danied.component';
import {ServerErrorModalComponent} from './server-error-modal/server-error-modal.component';


@NgModule({
    declarations: [
        CautionModalMismatchComponent,
        CautionModalExpiredComponent,
        HeaderComponent,
        TokenSentComponent,
        RegistrationSuccessComponent,
        UnregisteredModalComponent,
        CautionModalMissedComponent,
        CautionModalThirtyInactiveComponent,
        CautionModalNoMobileComponent,
        CautionModalFailedRetrieveInfoComponent,
        DataPreparationComponent,
        CautionInvalidTokenComponent,
        CautionInvalidTokenMultitimeComponent,
        ModalReactivationSuccessComponent,
        ChartSemiCircleComponent,
        ChangeProgressComponent,
        DatascopeComponent,
        SelectModalComponent,
        MenuBottomComponent,
        HeaderInsideTabsComponent,
        ModalYourTeamComponent,
        MenuBottomItemComponent,
        SingleSelectModalComponent,
        AlertTitleComponent,
        StoreChannelComponent,
        AboutModalComponent,
        AccessDaniedComponent,
        ServerErrorModalComponent
    ],
    imports: [
        IonicModule,
        SharedModule,
        CommonModule,
        DirectiveModule,
        ReactiveFormsModule
    ],
    exports: [
        CautionModalMismatchComponent,
        CautionModalExpiredComponent,
        HeaderComponent,
        TokenSentComponent,
        RegistrationSuccessComponent,
        UnregisteredModalComponent,
        CautionModalMissedComponent,
        CautionModalThirtyInactiveComponent,
        CautionModalNoMobileComponent,
        CautionModalFailedRetrieveInfoComponent,
        DataPreparationComponent,
        CautionInvalidTokenComponent,
        CautionInvalidTokenMultitimeComponent,
        ModalReactivationSuccessComponent,
        ChartSemiCircleComponent,
        ChangeProgressComponent,
        DatascopeComponent,
        SelectModalComponent,
        MenuBottomComponent,
        HeaderInsideTabsComponent,
        ModalYourTeamComponent,
        MenuBottomItemComponent,
        SingleSelectModalComponent,
        AlertTitleComponent,
        StoreChannelComponent,
        AboutModalComponent,
        AccessDaniedComponent,
        ServerErrorModalComponent
    ],
    entryComponents: [CautionModalMismatchComponent,
        CautionModalExpiredComponent, HeaderComponent, TokenSentComponent, RegistrationSuccessComponent, UnregisteredModalComponent,
        CautionModalMissedComponent,
        CautionModalThirtyInactiveComponent,
        CautionModalNoMobileComponent,
        CautionModalFailedRetrieveInfoComponent,
        DataPreparationComponent,
        CautionInvalidTokenComponent,
        CautionInvalidTokenMultitimeComponent,
        ModalReactivationSuccessComponent,
        ChartSemiCircleComponent,
        ChangeProgressComponent,
        DatascopeComponent,
        SelectModalComponent,
        MenuBottomComponent,
        HeaderInsideTabsComponent,
        ModalYourTeamComponent,
        MenuBottomItemComponent,
        SingleSelectModalComponent,
        AlertTitleComponent,
        StoreChannelComponent,
        AboutModalComponent,
        AccessDaniedComponent,
        ServerErrorModalComponent
    ],
    providers: [
        HomeService
    ]
})
export class ComponentsModule {
}
