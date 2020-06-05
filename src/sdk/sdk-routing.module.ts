import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'auth', pathMatch: 'full'},
    {path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule)},
    {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
    {path: 'store-alert', loadChildren: () => import('./store-alert/store-alert.module').then(m => m.StoreAlertModule)},
    {path: 'to-do', loadChildren: () => import('./to-do-inside/to-do-inside.module').then(m => m.ToDoInsideModule)},
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class SdkRoutingModule {
}
