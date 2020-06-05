import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalYourTeamComponent} from '../../shared/components/modal-your-team/modal-your-team.component';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {AuthService} from '../../auth/shared/services/auth.service';
import {SettingsService} from '../shared/services/settings.service';
import {SubscriptionUpgradeComponent} from '../../shared/components/subscription-upgrade/subscription-upgrade.component';
import {RESPONSE_CODE} from '../../shared/constants/response_code';


@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
})

export class SettingsComponent implements OnInit {
    public credentials: any;
    public settings: any[];
    user: any;
    lng = 'en';

    constructor(private modalController: ModalController,
                private route: ActivatedRoute,
                private formBuilder: FormBuilder,
                private auth: AuthService,
                private settingService: SettingsService) {
        this.user = JSON.parse(localStorage.user);

        this.credentials = this.formBuilder.group({
            email: ['', []],
            supplier_id: ['', []],
            company: ['', []],
            firstname: ['', []],
            lastname: ['', []],
            subscription_name: ['', []],
            renew_date: ['', []],
        });

    }

    ngOnInit() {
        if (this.route.snapshot.data['data']) {
            const userInfo = this.route.snapshot.data['data']['result'];
            this.settings = userInfo.settings;
            this.credentials.patchValue(userInfo);
            console.log(userInfo);
        }
    }

    async ionViewWillEnter() {

    }

    async subscriptionModal(url) {
        const modal = await this.modalController.create({
            component: SubscriptionUpgradeComponent,
            cssClass: 'iframeModal',
            componentProps: {url}
        });
        return modal.present();

    }

    update() {
        this.auth.settingsUpdate({
            user_id: this.user.userid,
            setting: this.settings
        })
            .subscribe(() => {
            });
    }

    reload() {
        this.settingService.get()
            .subscribe((success: APIResponse) => {
                if (success.code === RESPONSE_CODE.SUCCESS) {
                    const userInfo = success.result;
                    this.settings = userInfo.settings;
                    this.credentials.patchValue(userInfo);
                    this.subscriptionModal(success.result.url);
                }
            });
    }

}
