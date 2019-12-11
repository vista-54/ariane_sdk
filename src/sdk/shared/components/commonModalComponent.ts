import {ModalController} from '@ionic/angular';

export class CommonModalComponent {
    constructor(public modalCtrl: ModalController) {
    }

    dismiss() {
        this.modalCtrl.dismiss({
            dismissed: true
        });
    }
}
