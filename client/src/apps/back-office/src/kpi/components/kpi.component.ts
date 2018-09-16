import { Component, forwardRef, Inject, OnDestroy } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IShapeState } from '../../../../../shared/shapes/interfaces';

@Component({
    selector: 'bac-kpi',
    templateUrl: './kpi.component.html',
})

export class KpiComponent implements OnDestroy {
    public model;
    public objectKey = Object.keys;

    private subscription;

    constructor(@Inject(forwardRef(() => NgRedux)) public readonly ngRedux: NgRedux<IShapeState>) {
        this.subscription = ngRedux.select('kpis').subscribe((kpis) => this.model = kpis);
    }

    public ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
