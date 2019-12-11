import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ReportService} from '../shared/report.service';
import {NavController} from '@ionic/angular';
import {RESPONSE_CODE} from '../../shared/constants/response';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
    public params: any;
    prop: any;
    markets: any;
    public storeId: number;
    currentDate: Date;
    user: any;
    note: string;

    constructor(private route: ActivatedRoute, private reportService: ReportService, private navCtrl: NavController) {
        this.params = {};
        this.user = JSON.parse(localStorage.user);

        this.storeId = this.route.snapshot.params.store_id;
        if (this.route.snapshot.data['data']) {
            this.prop = this.route.snapshot.data['data'];
            console.log(this.prop);
            this.markets = this.valuesToArray(this.prop.result);
        }
        this.currentDate = new Date();
    }

    valuesToArray(obj) {
        return Object.keys(obj).map(function (key) {
            return {
                key,
                val: obj[key]
            };
        });
    }

    ngOnInit() {
        this.params.channel = this.route.snapshot.queryParams['channel'];
        this.params.name = this.route.snapshot.queryParams['name'];
    }

    send() {
        const data = {
            user_id: this.user.userid,
            store_id: this.storeId,
            note: this.note
        };
        this.reportService.send(data)
            .subscribe((res: APIResponse) => {
                if (res.code === RESPONSE_CODE.SUCCESS) {
                    this.navCtrl.back();
                }
            });
    }

}
