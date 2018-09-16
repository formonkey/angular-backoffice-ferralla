import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ShapeService } from '../services/shape.service';
import { HEADERS } from '../constants';
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

    constructor(private readonly service: ShapeService,
                private route: ActivatedRoute,) {
        this.subscription = this.route.data.subscribe((data) => this.hasActions = data.hasActions);
    }

    public async ngOnInit() {
        this.model = await this.service.getShapes();
    }

    public onAccept(index) {
        console.log('accept', index);
    }

    public onCancel(index) {
        console.log('cancel', index);
    }

    public ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
