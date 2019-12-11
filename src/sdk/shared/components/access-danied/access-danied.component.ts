import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-access-danied',
    templateUrl: './access-danied.component.html',
    styleUrls: ['./access-danied.component.scss'],
})
export class AccessDaniedComponent implements OnInit {

    @Input('target') public target: string;
    userSubscription: string;
    targetSub: string
    public levels = {
        1: 'Lite',
        2: 'Mid',
        3: 'Full'
    };

    public targetSunsciptions = {
        'To-do': '“Full”',
        'Store Visit': '“Full”',
        'Data Scope': '“Mid or “Full”'
    };

    constructor(private modalCtrl: ModalController) {
        const user = JSON.parse(localStorage.getItem('user'));
        this.userSubscription = this.levels[user['subscription']];
    }

    ngOnInit() {
        console.log(this.target)
        this.targetSub = this.targetSunsciptions[this.target];

    }

    dismiss() {
        this.modalCtrl.dismiss({
            dismissed: true
        });
    }

}
