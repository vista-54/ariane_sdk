import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StoreVisitService} from '../shared/services/store-visit.service';
import {HomeService} from '../shared/services/home.service';
import {SingleSelectModalComponent} from '../../shared/components/single-select-modal/single-select-modal.component';
import {ModalController} from '@ionic/angular';
import {StorevisitRequestModel} from '../shared/models/storevisit-request.model';
import {RESPONSE_CODE} from '../../shared/constants/response';
import {UserModel} from '../../shared/models/user.model';


@Component({
    selector: 'app-store-visit',
    templateUrl: './store-visit.component.html',
    styleUrls: ['./store-visit.component.scss'],
})

export class StoreVisitComponent implements OnInit {

    data: any;
    user: any;

    constructor(private route: ActivatedRoute, private storeService: StoreVisitService, private home: HomeService,
                private modalController: ModalController,
                private router: Router) {
        this.data = {
            channel: 'Not selected',
            name: 'Not selected',
        };
        this.user = JSON.parse(localStorage.user) as UserModel;
    }

    ngOnInit() {

    }

    ionViewDidEnter() {
        if (this.route.snapshot.data['data']['code'] === '0') {
            this.data = this.route.snapshot.data['data']['result']['current'];
            console.log(this.data);
        }
    }

    scope(type) {
        this.storeService.scope(type, {user_id: this.user.userid}).subscribe(success => {
            this.openSelect({
                type,
                data: success['result']
            });
        });
    }

    async load() {
        const data = {} as StorevisitRequestModel;
        data.user_id = this.user.userid;
        return this.storeService.get(data)
            .subscribe((response: APIResponse) => {
                if (response.code !== RESPONSE_CODE.SUCCESS) {
                    this.data = {
                        channel: 'Not selected',
                        name: 'Not selected',
                    };
                } else {
                    this.data = response.result.current;
                }
            });
    }

    async openSelect(prop) {
        const modal = await this.modalController.create({
            component: SingleSelectModalComponent,
            cssClass: 'selectModal',
            componentProps: {prop}
        });
        modal.onDidDismiss()
            .then(() => {
                this.load();
            });
        return await modal.present();
    }

    confirm() {
        this.router.navigate(['sdk/store-alert'], {
            queryParams: {
                channel: this.data.channel,
                name: this.data.name,
                store_id: this.data.store_id
            }
        });
    }

}
