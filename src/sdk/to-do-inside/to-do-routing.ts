import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ToDoListComponent} from './to-do-list/to-do-list.component';
import {ToDoInsideComponent} from './to-do-inside.component';
import {ToDoListService} from './shared/services/to-do-list.service';
import {ToDoDetailComponent} from './to-do-detail/to-do-detail.component';
import {ToDoDetailService} from './shared/services/to-do-detail.service';


const routes: Routes = [
    {
        path: '', component: ToDoInsideComponent, children: [
            {
                path: 'list/:code', component: ToDoListComponent,
                resolve: {
                    data: ToDoListService
                }
            },
            {
                path: 'detail/:code/:task_id', component: ToDoDetailComponent,
                resolve: {
                    data: ToDoDetailService
                }
            },

            {path: '', redirectTo: 'list', pathMatch: 'full'}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ToDoRouting {
}
