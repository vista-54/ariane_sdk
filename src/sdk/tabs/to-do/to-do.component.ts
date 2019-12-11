import {Component, OnInit} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {ToDoService} from '../shared/services/to-do.service';
import {MOCKTODO} from './mock.data';
import {TODO_PARAMS} from '../../shared/constants/to-do-params';

@Component({
    selector: 'app-to-do',
    templateUrl: './to-do.component.html',
    styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit {
    params = TODO_PARAMS;
    mock = MOCKTODO;
    user: any;
    data: any;
    dataObjects: any;

    constructor(private modalController: ModalController, private route: ActivatedRoute,
                private todoService: ToDoService, private router: Router, private navCtrl: NavController) {
        this.user = JSON.parse(localStorage.user);
        console.log('constructor');

    }

    ngOnInit() {
        console.log('init');
    }

    ionViewWillEnter() {
        const data = this.route.snapshot.data['data'];
        if (data.hasOwnProperty('result')) {
            this.dataObjects = data['result'];
            console.log(data['result']);
            this.data = this.valuesToArray(this.mock)
            console.log(this.data);
        }
        console.log('enter');
    }

    ionViewDidEnter() {
        console.log('ionViewDidEnter');

    }

    ionViewWillLeave() {
        console.log('ionViewWillLeave');
    }


    valuesToArray(obj) {
        const that = this;
        return Object.keys(obj).map(function (key) {
            let alerts = 0;
            if (that.dataObjects.hasOwnProperty(key)) {
                if (obj[key].alerts < that.dataObjects[key].alerts) {
                    alerts = that.dataObjects[key].alerts;
                }
            }
            return {
                key,
                val: {
                    alerts,
                    code: obj[key].code
                }
            };
        });
    }

    openToDoList(code, alerts) {
        if (alerts === 0) {
            return false;
        }
        this.navCtrl.navigateRoot(['/sdk/to-do/list', code]);
    }


}
