import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalYourTeamComponent} from '../../shared/components/modal-your-team/modal-your-team.component';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {AuthService} from '../../auth/shared/services/auth.service';


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
                private auth: AuthService) {
        this.user = JSON.parse(localStorage.user);

        this.credentials = this.formBuilder.group({
            email: ['', []],
            supplier_id: ['', []],
            company: ['', []],
            firstname: ['', []],
            lastname: ['', []],
            subscription: ['', []],
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

    async yourTeam() {
        const modal = await this.modalController.create({
            component: ModalYourTeamComponent,
            cssClass: 'shareModal',
        });
        return modal.present();

    }

    update() {
        this.auth.settingsUpdate({
            user_id: this.user.userid,
            setting: this.settings
        })
            .subscribe(success => {
            });
    }

}
