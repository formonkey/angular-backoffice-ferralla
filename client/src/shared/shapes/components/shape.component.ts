import { Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Optional, Output } from '@angular/core';
import { ShapeService } from '../services/shape.service';
import { BOOTSTRAP_ACTIONS, HEADERS } from '../constants';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'spa-shape',
    templateUrl: './shape.component.html'
})

export class ShapeComponent implements OnInit, OnDestroy {
    public model;
    public subscription;
    public hasActions: boolean;
    public readonly headers: string[] = HEADERS;

    constructor(private route: ActivatedRoute,
                private readonly service: ShapeService,
                @Optional() @Inject(BOOTSTRAP_ACTIONS) private readonly bootstrapActions,) {
        this.bootstrapActions = this.bootstrapActions[ 0 ];
        this.subscription = this.route.data.subscribe((data) => this.hasActions = data.hasActions);
    }

    public async ngOnInit() {
        this.model = await this.service.getShapes();
    }

    public onAccept(index) {
        this.service.accept(index);
    }

    public onCancel(index) {
        const action = this.bootstrapActions.cancel(index);

        this.bootstrapActions.ngRedux.dispatch(action);
    }

    public ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
