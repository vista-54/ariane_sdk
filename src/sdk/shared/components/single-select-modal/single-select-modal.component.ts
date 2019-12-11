import {Component, Input, OnInit} from '@angular/core';
import {Events, ModalController} from '@ionic/angular';
import {StoreVisitService} from '../../../tabs/shared/services/store-visit.service';

@Component({
    selector: 'app-single-select-modal',
    templateUrl: './single-select-modal.component.html',
    styleUrls: ['./single-select-modal.component.scss'],
})
export class SingleSelectModalComponent implements OnInit {

    @Input('prop') public prop: any;
    private selectedElement: any;
    list: any;
    private types = {
        retailer: 'value',
        channel: 'name',
        category: 'name',
        'sub-category': 'name',
        brand: 'name',
        product: 'value',
        store: 'value',
    };
    isSelectAll = false;
    user: any;

    constructor(private modalCtrl: ModalController, public events: Events, private storeVisitService: StoreVisitService) {
        this.user = JSON.parse(localStorage.user);

    }


    ngOnInit() {
        // Fill selected array when data is received
        this.prop.data.map(item => {
            if (item.select) {
                this.selectedElement = item;
            }
        });
        this.list = this.prop.data;
        console.log('FILTERED ARRAY=>');
    }

    dismiss() {
        this.modalCtrl.dismiss({
            dismissed: true
        });
    }

    search(query) {
        this.list = this.prop.data.filter(item => {
            return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 || query === '';
        });
    }

    save() {
        if (typeof this.selectedElement === 'undefined') {
            this.dismiss();
            return false;
        }
        const scope = {};
        switch (this.prop.type) {
            case 'store':
                scope['store_id'] = [this.selectedElement.value];
                break;
            case 'channel':
                scope['channel'] = [this.selectedElement.name];
                break;
            default:
                throw  Error('wrong choice');

        }
        this.storeVisitService.update({
            user_id: this.user.userid,
            scope
        }).subscribe(res => {
            if (res['code'] === '0') {
                this.dismiss();
            }
        });
        console.log(this.selectedElement);
    }

    select(value) {
        this.selectedElement = value
        console.log(this.list);
    }
}
