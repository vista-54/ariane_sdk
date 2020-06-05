import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() { }


  async presentModal(component) {
    const modal = await this.modalController.create({
      component,
    });
    modal.onDidDismiss()
      .then(() => {

      });
    return await modal.present();
  }

  async contactPage() {
    this.presentModal(ContactComponent);
  }




}
