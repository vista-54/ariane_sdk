import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {TutorialComponent} from './tutorial/tutorial.component';
import {TabsComponent} from './tabs.component';
import {SettingsComponent} from './settings/settings.component';
import {SettingsService} from './shared/services/settings.service';
import {StoreVisitComponent} from './store-visit/store-visit.component';
import {ToDoComponent} from './to-do/to-do.component';
import {StoreVisitService} from './shared/services/store-visit.service';
import {ToDoService} from './shared/services/to-do.service';
import {SubscriptionFullGuard} from './shared/guards/subscription-full.guard';

const routes: Routes = [
    {
        path: '', component: TabsComponent, children: [
            {path: 'home', component: HomeComponent},
            {
                path: 'store-visit', component: StoreVisitComponent, canActivate: [SubscriptionFullGuard], resolve: {
                    data: StoreVisitService
                }
            },
            {
                path: 'to-do', component: ToDoComponent, canActivate: [SubscriptionFullGuard], resolve: {
                    data: ToDoService
                }
            },
            {path: 'tutorial', component: TutorialComponent},
            {
                path: 'settings', component: SettingsComponent, resolve: {
                    data: SettingsService
                }
            },
            {path: '', redirectTo: 'home', pathMatch: 'full'}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TabsRouting {
}
