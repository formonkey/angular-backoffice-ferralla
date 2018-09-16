import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'spa-table',
    templateUrl: './table.component.html',
})

export class TableComponent {
    @Input() public readonly model;
    @Input() public readonly headers;
    @Input() public readonly hasActions: boolean;

    @Output('onCancel') public readonly fireCancel: EventEmitter<any> = new EventEmitter<any>();
    @Output('onAccept') public readonly fireAccept: EventEmitter<any> = new EventEmitter<any>();
}
