import {Component, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ToDoListService} from '../shared/services/to-do-list.service';
import {NavController} from '@ionic/angular';
import {TODO_PARAMS} from '../../shared/constants/to-do-params';
import {UserModel} from '../../shared/models/user.model';


@Component({
    selector: 'app-to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent {

    defaultType = '0';
    defaultDirection = 1;
    @Input('prop') public prop: any;
    @Input('alertCode') public alertCode = 'DEFAULT';
    params = TODO_PARAMS;
    user: UserModel;
    taskList: any[];
    filterField = 0;
    taskIds = [];
    isVisible = false;
    isSelectedAll = false;


    constructor(private route: ActivatedRoute,
                private toDoListService: ToDoListService,
                private navCtrl: NavController) {
        this.user = JSON.parse(localStorage.getItem('user')) as UserModel;
    }

    ionViewWillEnter() {
        this.reloadData();
        console.log('will enter');
    }


    taskTypeChanged(event) {
        this.defaultType = event.detail.value;
        this.filterByStatus(this.defaultType);
        this.resetParams();


    }

    filterByStatus(status) {
        this.taskList = this.prop.filter(item => {
            item.selected = false;
            return item.complete === status;
        });
    }

    orderBy(field) {
        if (field === this.filterField) {
            this.filterField = 0;
        } else {
            this.filterField = field;
        }
        this.defaultDirection = -1 * this.defaultDirection;
        this.taskList = this.taskList.sort((a, b) => {
            if (a[field] < b[field]) {
                return -1 * this.defaultDirection;
            }
            if (a[field] > b[field]) {
                return this.defaultDirection;
            }
            return 0;
        });
    }

    select(item) {
        const isItemExist = this.taskIds.indexOf(item.task_id);
        if (isItemExist === -1) {
            this.taskIds.push(item.task_id);
        } else {
            this.taskIds.splice(isItemExist, 1);
        }
        this.isVisible = this.taskIds.length > 0;
    }

    changeStatus() {
        this.toDoListService.markAs({
            user_id: this.user.userid,
            task_id: this.taskIds,
            status: this.defaultType === '0' ? '1' : '0'

        }).subscribe(res => {
            // reload list
            this.loadData();
        });
    }

    delete() {
        this.toDoListService.delete({
            user_id: this.user.userid,
            task_id: this.taskIds,
            status: '1'
        }).subscribe(res => {
            // reload list
            this.loadData();
        });
    }

    loadData() {
        const data = {
            alert_code: this.alertCode,
            user_id: this.user.userid
        };
        this.toDoListService.list(data)
            .subscribe(res => {
                this.prop = res.result;
                this.resetParams();
                this.filterByStatus(this.defaultType);
            });
    }

    selectAll(isSelectedAll) {
        const isSelected = isSelectedAll.detail.checked;
        if (isSelected) {
            this.taskList.map(item => {
                this.taskIds.push(item.task_id);
                item.selected = true;
            });
        } else {
            this.taskIds = [];
            this.taskList.map(item => {
                item.selected = false;
            });
        }
        this.isVisible = this.taskIds.length > 0;

    }


    resetParams() {
        this.isSelectedAll = false;
        this.taskIds = [];
        this.isVisible = false;
        this.filterField = 0;
    }

    reloadData() {
        if (this.route.snapshot.data['data']) {
            this.prop = this.route.snapshot.data['data']['result'];
            if (!this.prop.length) {
                this.navCtrl.navigateRoot(['/sdk/tabs/to-do']);
                return false;
            }
            this.alertCode = this.route.snapshot.params.code;
            console.log(this.prop);
            this.filterByStatus(this.defaultType);
        }
    }

}
