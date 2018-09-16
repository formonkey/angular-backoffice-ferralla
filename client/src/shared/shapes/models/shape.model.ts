import { Injectable } from '@angular/core';

@Injectable()
export class ShapeModel {
    private _data: any = [];

    get data() {
        return this._data;
    }

    set data(model) {
        this._data = model;
    }
}
