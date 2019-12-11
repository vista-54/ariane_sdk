import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {WidgetModel} from '../shared/models/widget.model';
import {HomeHeaderModel} from '../shared/models/homeHeader.model';
import {DatascopeComponent} from '../../shared/components/datascope/datascope.component';
import {WIDGET_PARAMS} from '../../shared/constants/widget';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    widgets: WidgetModel[];
    header: HomeHeaderModel;
    widgetsParams = WIDGET_PARAMS;

    constructor(private modalController: ModalController) {
        this.loadWidgets();
    }

    ngOnInit() {
        console.log('init');
    }

    loadWidgets() {
        this.header = JSON.parse(localStorage.getItem('home_header')) as HomeHeaderModel;
        this.widgets = JSON.parse(localStorage.getItem('home')) as WidgetModel[];
    }

    async dataScope() {
        this.presentModal(DatascopeComponent);
    }

    async presentModal(component) {
        const modal = await this.modalController.create({
            component,
        });
        modal.onDidDismiss()
            .then(() => {
                this.loadWidgets();
            });
        return await modal.present();
    }


}
