import { NgRedux } from '@angular-redux/store';

import { IShapeState } from '../interfaces';
import { GlobalService } from '../../../core/global/services/global.service';
import { ACTIONS } from '../constants';

export abstract class ShapeAction {
    constructor(
        public globalService: GlobalService,
        public readonly ngRedux: NgRedux<IShapeState>,
    ) {}

    public set(payload) {
        return { payload, type: ACTIONS.SET };
    }
}
