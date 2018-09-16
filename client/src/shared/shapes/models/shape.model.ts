import { Injectable } from '@angular/core';
import { STEEL_TYPE } from '../constants';

@Injectable()
export class ShapeModel {
    private _data: any = [];
    private _kpi: any = {
        total: 0,
        ratio: {},
        diameter: {},
        type: {},
        steel: 0,
    };

    get kpi() {
        return this._kpi;
    }

    get data() {
        return this._data;
    }

    set data(model) {
        this._data = model;

        this.calcKpiData();
    }

    private calcKpiData() {
        let shapeValid: number = 0;
        let shapeInvalid: number = 0;

        for (let element of this._data) {
            this._kpi.total += element.total;

            shapeValid += element.valid ? element.total : 0;
            shapeInvalid += !element.valid ? element.total : 0;

            this.calcObjectData(element, 'type');
            this.calcObjectData(element, 'diameter');

            if (+element.type === STEEL_TYPE) {
                this._kpi.steel += element.total;
            }
        }

        this.calcRatio(shapeValid, shapeInvalid);
    }

    private calcObjectData(element, metadata) {
        this._kpi[ metadata ][ element[ metadata ] ] = this._kpi[ metadata ][ element[ metadata ] ] || 0;
        this._kpi[ metadata ][ element[ metadata ] ] += element.total;
    }

    private calcRatio(valid, invalid) {
        if (valid && invalid) {
            const tempValid = Math.round(this._kpi.total / valid);
            const tempInvalid = Math.round(this._kpi.total / invalid);

            this._kpi.ratio = {
                valid: `${ Math.round((this._kpi.total / tempValid) / valid) }:${ tempValid }`,
                invalid: `${ Math.round((this._kpi.total / tempInvalid) / invalid) }:${ tempInvalid }`,
            };
        }
    }
}
