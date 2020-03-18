import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {

    public credentials: any;
    public reactivation = false;
    public userId: number;

    constructor(private auth: AuthService,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute) {
        this.credentials = this.formBuilder.group({
            email: ['', [Validators.required]],
            supplier_id: ['', [Validators.required]],
            company: ['', [Validators.required]],
            firstname: ['', [Validators.required]],
            lastname: ['', [Validators.required]],
            position: ['', []],
            phone: ['', []],
        });

    }

    ngOnInit() {
    }

    async ionViewWillEnter() {
        if (this.route.snapshot.data['data']) {
            this.reactivation = true;
            const userInfo = this.route.snapshot.data['data']['result'];
            this.credentials.patchValue(userInfo);
            this.userId = userInfo.userid;
            console.log(userInfo);
        }
    }

    register() {
        if (!this.reactivation) {
            this.auth.register(this.credentials.value).subscribe(success => {
                console.log(success);
            });
        } else {
            this.auth.reactivate({user_id: this.userId}).subscribe(success => {
                console.log(success);
            });
        }

    }


}
