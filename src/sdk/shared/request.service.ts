import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {DataPreparationComponent} from './components/data-preparation/data-preparation.component';
import {ModalController} from '@ionic/angular';

@Injectable()
export class RequestService {

    // loading;

    constructor(private http: HttpClient,private modalCtrl:ModalController) {
    }


    public post(url: string, credentials: any) {
        this.presentModal(DataPreparationComponent);
        return this.http.post(url, credentials)
            .pipe(tap(() => {
                this.modalCtrl.dismiss({
                    dismissed: true
                });
            }, error => {
                this.modalCtrl.dismiss({
                    dismissed: true
                });
            }));
    }

    private async presentModal(Component: any) {
        const modal = await this.modalCtrl.create({
            component: Component
        });
        return await modal.present();
    }


}
