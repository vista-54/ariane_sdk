import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { LoginResponse } from '../../shared/interfaces/response';
import { RESPONSE_CODE } from '../../shared/constants/response';
import { BehaviorSubject } from 'rxjs';
import { CommonService } from '../../shared/services/common.service';


@Component({
    selector: 'app-info1',
    templateUrl: './info1.component.html',
    styleUrls: ['./info1.component.scss'],
})
export class Info1Component implements OnInit {

    public credentials: FormGroup;
    @ViewChild('email', { static: false }) inputElement: IonInput;
    constructor(private auth: AuthService,
        private formBuilder: FormBuilder,
        public router: Router,
        public commonService: CommonService) {
        this.credentials = this.formBuilder.group({
            email: ['', [Validators.required]],
            supplier_id: ['', [Validators.required]],
        });
        this.commonService.getWrongTokenEvent().subscribe(data => {
            if (data.event === 'login:error') {
                this.inputElement.setFocus();
            }
        })
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
        this.auth.login(this.credentials.value).subscribe(success => {
            localStorage.setItem('login', JSON.stringify(this.credentials.value));
            const result = success as LoginResponse;
            if (result.code === RESPONSE_CODE.SUCCESS) {
                this.router.navigate(['sdk/auth/more-info']);
            } else {
                this.inputElement.setFocus();
            }
        });
    }


}
