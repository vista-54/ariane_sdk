import {ModalController} from '@ionic/angular';
import {CanDeactivate} from '@angular/router';
import {CreateToDoComponent} from '../../create-to-do/create-to-do.component';
import {ToDoNotSavedComponent} from '../../../shared/components/to-do-not-saved/to-do-not-saved.component';

export class IsToDoSaved implements CanDeactivate<CreateToDoComponent> {

    public modal: HTMLIonModalElement;

    constructor(public modalController: ModalController) {
    }

    canDeactivate(component: CreateToDoComponent) {
        if (component.selectedDate || component.note) {
            return this.presentModal(ToDoNotSavedComponent).then(res => {
                return res;
            });
        } else {
            return true;
        }

    }

    private async presentModal(component) {
        this.modal = await this.modalController.create({
            component,
            cssClass: 'shareModal',
        });

        this.modal.present();

        return this.modal.onDidDismiss()
            .then((detail) => {
                return detail.data;
            });
    }
}
