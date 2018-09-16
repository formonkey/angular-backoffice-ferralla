import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { Inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { ROUTES } from './constants';
import { BootstrapAction } from './actions';
import { IBootstrapState } from './interfaces';
import { BootstrapComponent } from './components';
import { GlobalService } from '../../../../core/global/services/global.service';

@NgModule({
    imports: [
        BrowserModule,
        NgReduxModule,

        RouterModule.forRoot(ROUTES, {
            useHash: true
        }),
    ],
    declarations: [
        BootstrapComponent
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
