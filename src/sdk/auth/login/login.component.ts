import {Component, OnInit, ViewChild} from '@angular/core';
import {RequestTokenModel} from '../shared/models/requestToken.model';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {Route} from '@angular/compiler/src/core';
import {Router} from '@angular/router';
import {AuthService} from '../shared/services/auth.service';
import {IonInput} from '@ionic/angular';
import {VerifyTokenModel} from '../shared/models/verifyToken.model';
import {HomeRequestModel} from '../shared/models/homeRequest.model';
import {HomeService} from '../../tabs/shared/services/home.service';
import {CommonService} from '../../shared/services/common.service';
import {RESPONSE_CODE, RESPONSE_CODE_VERIFY_TOKEN} from '../../shared/constants/response_code';
import {HomeResponse, LoginResponse, VerifyTokenResponse} from '../../shared/interfaces/response';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {


    public credentials: FormGroup;
    @ViewChild('email', {static: false}) inputElement: IonInput;

    constructor(private auth: AuthService,
                private formBuilder: FormBuilder,
                public router: Router,
                public commonService: CommonService,
                private home: HomeService) {
        this.credentials = this.formBuilder.group({
            email: ['', [Validators.required]],
            supplier_id: ['', [Validators.required]],
            token: ['', [Validators.required]],
        });
        this.commonService.getWrongTokenEvent().subscribe(data => {
            if (data.event === 'login:error') {
                this.inputElement.setFocus();
            }
        });
        const loginCredentials = localStorage.getItem('login');
        if (loginCredentials) {
            this.credentials.patchValue(JSON.parse(loginCredentials));
        }

    }

    ngOnInit() {

    }

    /**
     *
     */
    next() {
        this.auth.reactivate(this.credentials.value).subscribe((result: LoginResponse) => {
            localStorage.setItem('login', JSON.stringify(this.credentials.value));
            if (result.code === RESPONSE_CODE.SUCCESS) {
                debugger
                const credentials: HomeRequestModel = {user_id: result.userid};
                this.home.get(credentials).subscribe((success: HomeResponse) => {
                    if (success.code === RESPONSE_CODE.SUCCESS) {
                        this.router.navigate(['sdk/tabs/home']);
                    }
                });
            } else {
                this.inputElement.setFocus();
            }
        });
    }


    verifyToken(user_id) {
        const verifyTokenCredentials: VerifyTokenModel = {
            user_id,
            token: this.credentials.value.token
        };
        localStorage.setItem('latestToken', this.credentials.value.token);
        this.auth.verifyToken(verifyTokenCredentials)
            .subscribe((result: VerifyTokenResponse) => {
                if (result.code === RESPONSE_CODE_VERIFY_TOKEN.SUCCESS) {
                    this.router.navigate(['sdk/tabs/home']);
                }
            });
    }
}
