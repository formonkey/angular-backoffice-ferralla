import { Inject, Injectable, OnDestroy, Optional } from '@angular/core';

import { BOOTSTRAP_ACTIONS } from '../constants';
import { ShapeModel } from '../models';
import { ShapeRemoteService } from './shape-remote.service';

@Injectable()
export class ShapeService implements OnDestroy {
    private subscription;

    constructor(
        private readonly model: ShapeModel,
        private readonly remoteService: ShapeRemoteService,
        @Optional() @Inject(BOOTSTRAP_ACTIONS) private readonly bootstrapActions,
    ) {
        this.bootstrapActions = this.bootstrapActions[0];
        this.subscription = this.bootstrapActions.ngRedux.select('shapes')
            .subscribe((shapes) => {
                this.model.data = shapes;

                if (this.bootstrapActions.kpi) {
                    const action = this.bootstrapActions.kpi(this.model.kpi);

                    this.bootstrapActions.ngRedux.dispatch(action);
                }
            });
    }

    public async getShapes() {
        if (!this.model.data.length) {
            const action = this.bootstrapActions.set(await this.remoteService.getShapes());

            this.bootstrapActions.globalService.globalEventDistributor.dispatch(action);
        }

        return this.model.data;
    }

    public accept(index) {
        const action = this.bootstrapActions.accept(index);

        this.bootstrapActions.ngRedux.dispatch(action);
    }

    public ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
