import { Component, Input } from '@angular/core';

@Component({
    selector: 'spa-table',
    templateUrl: './table.component.html',
})

export class TableComponent {
    @Input() public readonly model;
    @Input() public readonly headers;
}
