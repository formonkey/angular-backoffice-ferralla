import { CommonModule } from '@angular/common';
import { NgReduxModule } from '@angular-redux/store';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ShapeModel } from './models';
import { TableModule } from '../tables';
import { ShapeComponent } from './components';
import { BOOTSTRAP_ACTIONS } from './constants';
import { ShapeService, ShapeRemoteService } from './services';

@NgModule({
    imports: [
        CommonModule,
        NgReduxModule,
        HttpClientModule,

        TableModule,
    ],
    declarations: [
        ShapeComponent,
    ],
    providers: [
        ShapeModel,
        ShapeService,
        ShapeRemoteService,
    ],
    exports: [
        ShapeComponent,
    ]
})

export class ShapeModule {
    public static forRoot(actions): ModuleWithProviders {
        return {
            ngModule: ShapeModule,
            providers: [
                {
                    multi: true,
                    provide: BOOTSTRAP_ACTIONS,
                    useClass: actions,
                },
            ],
        };
    }
}
