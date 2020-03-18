import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../shared/services/auth.service';
import {RESPONSE_CODE, RESPONSE_CODE_SETTINGS_UPDATE} from '../../shared/constants/response_code';
import {HomeResponse, SettingsUpdateResponse} from '../../shared/interfaces/response';
import {HomeService} from '../../tabs/shared/services/home.service';
import {HomeRequestModel} from '../shared/models/homeRequest.model';
import {UserModel} from '../../shared/models/user.model';
import {Setting, SettingsModel} from '../../shared/models/settings.model';

@Component({
    selector: 'app-options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {

    settings: Setting[];
    user: UserModel;

    constructor(private router: Router,
                private auth: AuthService,
                private home: HomeService) {
        this.settings = JSON.parse(localStorage.settings) as Setting[];
        this.user = JSON.parse(localStorage.user) as UserModel;
    }

    ngOnInit() {
    }

    next() {
        const settings: SettingsModel = {
            user_id: this.user.userid,
            setting: this.settings
        };
        this.auth.settingsUpdate(settings)
            .subscribe(success => {
                const result = success as SettingsUpdateResponse;
                if (result.code === RESPONSE_CODE_SETTINGS_UPDATE.SUCCESS) {
                    this.loadHome();
                }
            });
    }

    loadHome() {
        const credentials: HomeRequestModel = {user_id: this.user.userid};
        this.home.get(credentials).subscribe(success => {
            const result = success as HomeResponse;
            if (result.code === RESPONSE_CODE.SUCCESS) {
                this.router.navigate(['sdk/auth/well-done']);
            }
        });
    }
}
