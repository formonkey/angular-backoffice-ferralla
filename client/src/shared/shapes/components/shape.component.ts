import { Component, OnInit } from '@angular/core';
import { ShapeService } from '../services/shape.service';
import { HEADERS } from '../constants';

@Component({
    selector: 'spa-shape',
    templateUrl: './shape.component.html'
})

export class ShapeComponent implements OnInit {
    public model;
    public readonly headers: string[] = HEADERS;

    constructor(private readonly service: ShapeService) {}

    public async ngOnInit() {
        this.model = await this.service.getShapes();
    }
}
