import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';
import {Router} from '@angular/router';
import {RESPONSE_CODE_VERIFY_TOKEN} from '../../shared/constants/response_code';
import {VerifyTokenResponse} from '../../shared/interfaces/response';
import {Events, IonInput} from '@ionic/angular';
import {VerifyTokenModel} from '../shared/models/verifyToken.model';
import {RequestTokenModel} from '../shared/models/requestToken.model';

@Component({
    selector: 'app-more-info',
    templateUrl: './more-info.component.html',
    styleUrls: ['./more-info.component.scss'],
})
export class MoreInfoComponent implements OnInit {
    credentials: FormGroup;
    user: any;
    @ViewChild('code', {static: false}) inputElement: IonInput;

    constructor(private auth: AuthService,
                private formBuilder: FormBuilder,
                public router: Router,
                public events: Events) {
        this.user = JSON.parse(localStorage.user);
        const latestToken = localStorage.getItem('latestToken');
        this.credentials = this.formBuilder.group({
            email: [this.user.email, [Validators.required]],
            supplier_id: [this.user.supplier_id, [Validators.required]],
            company: [this.user.company, [Validators.required]],
            firstname: [this.user.firstname, [Validators.required]],
            lastname: [this.user.lastname, [Validators.required]],
            position: [this.user.position, []],
            subscription: [this.user.subscription, []],
            phone: [this.user.phone, []],
            token: ['', [Validators.required]],
        });
        if (latestToken) {
            this.credentials.patchValue({token: latestToken});
        }
        events.subscribe('token:error', () => {
            this.inputElement.setFocus();
        });
    }

    ngOnInit() {
    }

    next() {
        const verifyTokenCredentials: VerifyTokenModel = {
            user_id: this.user.userid,
            token: this.credentials.value.token
        };
        localStorage.setItem('latestToken', this.credentials.value.token);
        this.auth.verifyToken(verifyTokenCredentials)
            .subscribe(success => {
                const result = success as VerifyTokenResponse;
                if (result.code === RESPONSE_CODE_VERIFY_TOKEN.SUCCESS) {
                    this.router.navigate(['sdk/auth/options']);
                }
            });
    }

    requestToken() {
        const data: RequestTokenModel = {user_id: this.user.userid};
        this.auth.requestToken(data)
            .subscribe(success => {
                console.log(success);
            });
    }
}
