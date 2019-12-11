import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainComponent} from './main/main.component';
import {StoreAlertComponent} from './store-alert.component';
import {StoreAlertService} from './shared/store-alert.service';
import {StoreAlertDetailComponent} from './detail/store-alert-detail.component';
import {AlertDetailService} from './shared/alert-detail.service';
import {ReportComponent} from './report/report.component';
import {CreateToDoComponent} from './create-to-do/create-to-do.component';
import {ReportService} from './shared/report.service';
import {IsToDoSaved} from './shared/guards/isToDoSaved';


const routes: Routes = [
    {
        path: '', component: StoreAlertComponent, children: [
            {
                path: 'main', component: MainComponent,
                resolve: {
                    data: StoreAlertService
                }
            },
            {
                path: 'detail/:code', component: StoreAlertDetailComponent,
                resolve: {
                    data: AlertDetailService
                }
            },
            {
                path: 'report/:store_id', component: ReportComponent,
                resolve: {
                    data: ReportService
                }
            }, {
                path: 'create-to-do', component: CreateToDoComponent,
                canDeactivate: [IsToDoSaved]
            },
            {path: '', redirectTo: 'main', pathMatch: 'full'}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class StoreAlertRouting {
}
