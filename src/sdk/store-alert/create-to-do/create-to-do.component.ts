import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {CreateToDoService} from '../shared/create-to-do.service';
import {NavController} from '@ionic/angular';
import {ToDo} from './todo.model';
import {TODO_PARAMS} from '../../shared/constants/to-do-params';
import {RESPONSE_CODE} from '../../shared/constants/response';


@Component({
    selector: 'app-create-to-do',
    templateUrl: './create-to-do.component.html',
    styleUrls: ['./create-to-do.component.scss'],
})
export class CreateToDoComponent {
    params = TODO_PARAMS;
    state: any;
    date: Date;
    toDo: ToDo;
    note: string;
    selectedDate: Date;

    constructor(private router: Router, private createToDoService: CreateToDoService, private nav: NavController) {

        const user = JSON.parse(localStorage.user);
        const navigation = this.router.getCurrentNavigation();
        this.state = navigation.extras.state;
        console.log(this.state);
        this.date = new Date();
        this.toDo = new ToDo();
        this.toDo.user_id = user.userid;
        this.toDo.alert_code = this.state.alertCode;
        this.toDo.store_id = this.state.store_id;
        this.toDo.item_id = this.state.item.item_id;
        this.toDo.value = this.state.item.value;

    }

    create() {
        this.toDo.note = this.note;
        this.toDo.due_date = this.selectedDate;
        this.createToDoService.save(this.toDo)
            .subscribe((next: APIResponse) => {
                if (next.code === RESPONSE_CODE.SUCCESS) {
                    this.note = '';
                    this.selectedDate = null;
                    this.goBack();
                }
            });
    }

    goBack() {
        this.nav.back();
    }

}
