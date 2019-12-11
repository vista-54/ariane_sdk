import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {Info1Component} from './info1/info1.component';
import {AuthComponent} from './auth.component';
import {RegistrationComponent} from './registration/registration.component';
import {MoreInfoComponent} from './more-info/more-info.component';
import {OptionsComponent} from './options/options.component';
import {WellDoneComponent} from './well-done/well-done.component';
import {AuthService} from './shared/services/auth.service';

const routes: Routes = [
    {
        path: '', component: AuthComponent, children: [
            {path: 'welcome', component: WelcomeComponent},
            {path: 'info1', component: Info1Component},
            {path: 'registration', component: RegistrationComponent, resolve: {data: AuthService}},
            {path: 'more-info', component: MoreInfoComponent},
            {path: 'options', component: OptionsComponent},
            {path: 'well-done', component: WellDoneComponent},
            {path: '', redirectTo: 'welcome', pathMatch: 'full'}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AuthRouting {
}
