import { RouterModule } from '@angular/router';
import { Inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { ROUTES } from './constants';
import { BootstrapAction } from './actions';
import { IBootstrapState } from './interfaces';
import { KpiComponent } from '../kpi/components';
import { BootstrapComponent } from './components';
import { ShapeModule } from '../../../../shared/shapes/shape.module';
import { NavHeaderComponent } from '../../../../shared/nav-header/components';
import { GlobalService } from '../../../../core/global/services/global.service';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        NgReduxModule,

        RouterModule.forRoot(ROUTES, {
            useHash: true
        }),

        ShapeModule.forRoot(BootstrapAction),
    ],
    declarations: [
        KpiComponent,
        BootstrapComponent,
        NavHeaderComponent,
    ],
    providers: [
        GlobalService,
        BootstrapAction,
        {
            provide: APP_BASE_HREF,
            useValue: '/back-office/',
        },
    ],
    bootstrap: [
        BootstrapComponent
    ]
})

export class BootstrapModule {
    constructor(
        private globals: GlobalService,
        private ngRedux: NgRedux<IBootstrapState>,
        @Inject('localStoreRef') private localStoreRef: any,
        @Inject('globalEventDispatcherRef') private globalEventDispatcherRef: any
    ) {
        this.ngRedux.provideStore(localStoreRef);
        this.globals.globalEventDistributor = globalEventDispatcherRef;
    }
}
