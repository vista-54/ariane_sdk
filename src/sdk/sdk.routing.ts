import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeSdkComponent} from './home-sdk/home-sdk.component';
import {SdkComponent} from './sdk.component';
import {TutorialSdkComponent} from './tutorial/tutorial-sdk.component';
import {SdkService} from './shared/sdk.service';

const routes: Routes = [
    {
        path: '', component: SdkComponent, children: [
            {
                path: 'home-sdk', component: HomeSdkComponent, resolve: {
                    data: SdkService
                }
            },
            {path: 'tutorial', component: TutorialSdkComponent},
            {path: '', redirectTo: 'home-sdk', pathMatch: 'full'}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class SdkRouting {
}
