import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';

import {HomePage} from './home.page';
import {TurgenevSharedModule} from 'turgenev-shared';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,

        TurgenevSharedModule,

        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ])
    ],
    declarations: [HomePage]
})
export class HomePageModule {
}
