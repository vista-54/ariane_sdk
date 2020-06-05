import {Component, OnInit} from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {Validators, FormBuilder, Form, FormGroup} from '@angular/forms';
import {CommonService} from '../../services/common.service';
import {RESPONSE_CODE} from '../../constants/response_code';
import {AuthService} from '../../../auth/shared/services/auth.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
    public credentials: FormGroup;
    private userId: number;

    constructor(private modalController: ModalController,
                private formBuilder: FormBuilder,
                private auth: AuthService,
                private commonService: CommonService,
                private alertController: AlertController) {
        const user = JSON.parse(localStorage.user);
        this.userId = user.userid;
        this.credentials = this.formBuilder.group({
            user_email: ['', [Validators.required]],
            subject: ['', [Validators.required]],
            company: ['', [Validators.required]],
            firstname: ['', [Validators.required]],
            lastname: ['', [Validators.required]],
            message: ['', [Validators.required]],
        });
    }

    ngOnInit() {

        this.commonService.getContactDetails(this.userId)
            .subscribe((data: APIResponse) => {
                this.credentials.patchValue(data.result);
            });

    }

    dismiss() {
        setTimeout(() => {
            this.modalController.dismiss({
                dismissed: true
            });
        }, 500);

    }

    submit() {
        const data = {
            user_id: this.userId,
            subject: this.credentials.value.subject,
            message: this.credentials.value.message,
        };
        this.commonService.sendContactDetails(data).subscribe((response: APIResponse) => {
            if (response.code === RESPONSE_CODE.SUCCESS) {
                this.presentAlert();
            }
        });
    }

    async presentAlert() {
        const alert = await this.alertController.create({
            message: 'Thank you for your message, we will contact you very soon.',
            buttons: ['OK']
        });

        await alert.present();
    }
}
