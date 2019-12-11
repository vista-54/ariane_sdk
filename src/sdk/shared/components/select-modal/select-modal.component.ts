import {Component, Input, OnInit} from '@angular/core';
import {Events, ModalController} from '@ionic/angular';


@Component({
    selector: 'app-select-modal',
    templateUrl: './select-modal.component.html',
    styleUrls: ['./select-modal.component.scss'],
})
export class SelectModalComponent implements OnInit {

    @Input('prop') public prop: any;
    private selectedArr: any[] = [];
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


    constructor(private modalCtrl: ModalController, public events: Events) {
    }


    ngOnInit() {
        let savedData = [];
        if (localStorage[this.prop.type]) {
            savedData = JSON.parse(localStorage[this.prop.type]);
        }

        // Fill selected array when data is received
        this.prop.data.map(item => {
            if (localStorage[this.prop.type]) {
                if (savedData.indexOf(item[this.types[this.prop.type]]) !== -1) {
                    this.selectedArr.push(item[this.types[this.prop.type]]);
                    item.select = true;
                } else {
                    item.select = false;
                }
            } else if (item.select) {
                this.selectedArr.push(item[this.types[this.prop.type]]);
            }
        });

        this.list = this.prop.data;
        console.log('FILTERED ARRAY=>');
        console.log(this.selectedArr);
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
        this.events.publish('datascope:save', this.prop.type, this.selectedArr);
        localStorage[this.prop.type] = JSON.stringify(this.selectedArr);
        this.dismiss();
    }

    select(item) {
        const element = item[this.types[this.prop.type]];
        const indexInArr = this.selectedArr.indexOf(element);
        if (indexInArr === -1) {
            this.selectedArr.push(element);
        } else {
            this.selectedArr.splice(indexInArr, 1);
        }
    }

    selectAll() {
        this.isSelectAll = !this.isSelectAll;
        if (this.isSelectAll) {
            this.prop.data.map(item => {
                item.select = true;
                this.selectedArr.push(item[this.types[this.prop.type]]);
            });
        } else {
            this.prop.data.map(item => {
                item.select = false;
            });
            this.selectedArr = [];
        }

    }
}
