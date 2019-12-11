import {Injectable} from '@angular/core';
import {Request} from '../interfaces/request.interface';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import * as queryString from 'query-string';
import {tap} from 'rxjs/operators';
import {ModalController} from '@ionic/angular';
import {LoadingService} from './loading.service';
import {DataPreparationComponent} from '../components/data-preparation/data-preparation.component';
import {CautionModalFailedRetrieveInfoComponent} from '../components/caution-modal-failed-retrieve-info/caution-modal-failed-retrieve-info.component';
import {ServerErrorModalComponent} from '../components/server-error-modal/server-error-modal.component';

@Injectable()
export class RequestService implements Request {

    // loading;

    constructor(private http: HttpClient,
                private router: Router,
                private loading: LoadingService,
                private modalCtrl: ModalController) {
    }

    public get(url: string, body: object = null, loader: boolean = true, modal: boolean = false) {
        if (loader) {
            this.loading.present();
        }
        if (modal) {
            this.presentModal(DataPreparationComponent);
        }
        if (body !== null) {
            if (Object.keys(body).length > 0) {
                url += '?' + queryString.stringify(body);
            }
        }
        return this.http.get(url)
            .pipe(tap(() => {
                if (loader) this.loading.dismiss();
                if (modal) {
                    this.modalCtrl.dismiss({
                        dismissed: true
                    });
                }

            }, error => {
                if (loader) this.loading.dismiss();

                if (modal) {
                    this.modalCtrl.dismiss({
                        dismissed: true
                    });
                }
                this.presentCautionModal(CautionModalFailedRetrieveInfoComponent);
                throw Error(error.message);

            }));
    }

    public post(url: string, credentials: any, loader: boolean = true) {
        if (loader) this.loading.present();
        return this.http.post(url, credentials)
            .pipe(tap(() => {
                if (loader) this.loading.dismiss();
            }, error => {
                if (loader) this.loading.dismiss();
                this.presentCautionModal(ServerErrorModalComponent);
                throw Error(error.message);
            }));
    }


    private async presentModal(Component: any) {
        const modal = await this.modalCtrl.create({
            component: Component
        });
        return await modal.present();
    }

    private async presentCautionModal(Component: any) {
        const modal = await this.modalCtrl.create({
            component: Component,
            cssClass: 'shareModal',
        });
        return await modal.present();
    }
}
