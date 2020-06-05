import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabsRouting} from './tabs-routing';
import {IonicModule} from '@ionic/angular';
import {ComponentsModule} from '../shared/components/components.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DirectiveModule} from '../shared/directives/directive.module';
import {HomeComponent} from './home/home.component';
import {TabsComponent} from './tabs.component';
import {TutorialComponent} from './tutorial/tutorial.component';
import {SettingsComponent} from './settings/settings.component';
import {SettingsService} from './shared/services/settings.service';
import {AuthService} from '../auth/shared/services/auth.service';
import {StoreVisitComponent} from './store-visit/store-visit.component';
import {ToDoComponent} from './to-do/to-do.component';
import {StoreVisitService} from './shared/services/store-visit.service';
import {ToDoService} from './shared/services/to-do.service';
import {SharedModule} from '../shared/shared.module';
import {SubscriptionFullGuard} from './shared/guards/subscription-full.guard';
import {CommonService} from '../shared/services/common.service';


@NgModule({
    declarations: [TabsComponent, HomeComponent, TutorialComponent, SettingsComponent, StoreVisitComponent, ToDoComponent],
    imports: [
        CommonModule,
        TabsRouting,
        FormsModule,
        IonicModule,
        RouterModule,
        ReactiveFormsModule,
        ComponentsModule,
        DirectiveModule,
        SharedModule
    ],
    providers: [
        AuthService,
        SettingsService,
        StoreVisitService,
        ToDoService,
        SubscriptionFullGuard,
        CommonService
    ]

})
export class TabsModule {
}
