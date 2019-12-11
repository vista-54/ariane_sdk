import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserModel} from '../../../shared/models/user.model';
import {ModalController} from '@ionic/angular';
import {ModalOptions} from '@ionic/core';
import {AccessDaniedComponent} from '../../../shared/components/access-danied/access-danied.component';

export class SubscriptionFullGuard implements CanActivate {

    constructor(public modalController: ModalController) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        const user = JSON.parse(localStorage.getItem('user')) as UserModel;
        if (user.subscription !== '3') {
            this.presentModal(AccessDaniedComponent, {target: 'Store Visit'});
        }
        return user.subscription === '3';
    }

    private async presentModal(component: any, prop?: any) {
        const options: ModalOptions = {
            component,
            cssClass: 'shareModal',
            componentProps: prop
        };
        const modal = await this.modalController.create(options);
        return await modal.present();
    }
}
