import { Component, Input } from '@angular/core';

@Component({
    selector: 'spa-nav-header',
    templateUrl: './nav-header.component.html',
})

export class NavHeaderComponent {
    @Input() public readonly current: string;
}
