import {Component, OnDestroy, OnInit} from '@angular/core';
import {Events, ModalController} from '@ionic/angular';
import {SelectModalComponent} from '../select-modal/select-modal.component';
import {CommonService} from '../../services/common.service';
import {HomeService} from '../../../tabs/shared/services/home.service';

declare const Object;

@Component({
    selector: 'app-datascope',
    templateUrl: './datascope.component.html',
    styleUrls: ['./datascope.component.scss'],
})
export class DatascopeComponent implements OnInit, OnDestroy {

    user: any;
    public datascope = {};
    private resultArr = {};
    private types = {
        retailer: 'value',
        channel: 'name',
        category: 'name',
        subcategory: 'name',
        brand: 'name',
        product: 'value',
        store: 'value',
    };

    constructor(public modalCtrl: ModalController,
                private commonService: CommonService,
                private events: Events,
                private home: HomeService) {
        this.user = JSON.parse(localStorage.user);

    }

    async openSelect(data) {
        this.commonService.presentSelectModal(SelectModalComponent, data);
    }

    dismiss() {
        setTimeout(() => {
            this.modalCtrl.dismiss({
                dismissed: true
            });
        }, 500);

    }


    ngOnInit() {
        this.events.subscribe('datascope:save', (type, data) => {
            this.resultArr[type] = data;
            console.log(this.resultArr);
        });
    }

    get(type) {
        this.home.datascope(type, {user_id: this.user.userid}).subscribe(success => {
            this.datascope[type] = success['result'];
            this.openSelect({
                type,
                data: this.datascope[type]
            });
            console.log(success);
        });
    }

    apply() {
        if (Object.entries(this.resultArr).length === 0 && this.resultArr.constructor === Object) {
            this.dismiss();
            return false;
        }
        // Transform for send to backend
        if (this.resultArr.hasOwnProperty('product')) {
            this.resultArr['item_id'] = this.resultArr['product'];
            delete this.resultArr['product'];
        }
        if (this.resultArr.hasOwnProperty('store')) {
            this.resultArr['store_id'] = this.resultArr['store'];
            delete this.resultArr['store'];
        }
        if (this.resultArr.hasOwnProperty('sub-category')) {
            this.resultArr['subcategory'] = this.resultArr['sub-category'];
            delete this.resultArr['sub-category'];
        }
        this.home.scopeUpdate({
            user_id: this.user.userid,
            scope: this.resultArr
        }).subscribe(success => {
                if (success['code'] === '0') {
                    this.loadHome();
                }
            }
        );
    }

    loadHome() {
        this.home.get({user_id: this.user.userid})
            .subscribe(() => {
                this.dismiss();
            });
    }

    ngOnDestroy() {
        localStorage.removeItem('retailer');
        localStorage.removeItem('channel');
        localStorage.removeItem('category');
        localStorage.removeItem('subcategory');
        localStorage.removeItem('brand');
        localStorage.removeItem('product');
        localStorage.removeItem('store');
    }

}
