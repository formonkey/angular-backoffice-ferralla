import { NgRedux } from '@angular-redux/store';
import { forwardRef, Inject, Injectable } from '@angular/core';

import { ACTIONS } from '../../../../../shared/shapes/constants';
import { IShapeState } from '../../../../../shared/shapes/interfaces';
import { ShapeAction } from '../../../../../shared/shapes/actions/shape.action';
import { GlobalService } from '../../../../../core/global/services/global.service';

@Injectable()
export class BootstrapAction extends ShapeAction {
    constructor(
        @Inject(forwardRef(() => GlobalService)) private _globalService: GlobalService,
        @Inject(forwardRef(() => NgRedux)) public readonly _ngRedux: NgRedux<IShapeState>,
    ) {
        super(_globalService, _ngRedux);
    }

    public kpi(payload) {
        return { payload, type: ACTIONS.KPI };
    }
}
