import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRouting} from './auth-routing';
import {WelcomeComponent} from './welcome/welcome.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {Info1Component} from './info1/info1.component';
import {AuthComponent} from './auth.component';
import {AuthService} from './shared/services/auth.service';
import {ComponentsModule} from '../shared/components/components.module';
import {RegistrationComponent} from './registration/registration.component';
import {MoreInfoComponent} from './more-info/more-info.component';
import {OptionsComponent} from './options/options.component';
import {WellDoneComponent} from './well-done/well-done.component';
import {HomeService} from '../tabs/shared/services/home.service';
import {DirectiveModule} from '../shared/directives/directive.module';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {CommonService} from '../shared/services/common.service';


@NgModule({
    declarations: [AuthComponent,
        WelcomeComponent, Info1Component, RegistrationComponent, MoreInfoComponent,
        OptionsComponent, WellDoneComponent],
    imports: [
        CommonModule,
        AuthRouting,
        FormsModule,
        IonicModule,
        RouterModule,
        ReactiveFormsModule,
        ComponentsModule,
        DirectiveModule,
        SharedModule,
    ],
    providers: [
        AuthService,
        HomeService,
        CommonService
    ],


})
export class AuthModule {
}
