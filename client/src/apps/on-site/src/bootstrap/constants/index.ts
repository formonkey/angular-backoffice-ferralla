import { Routes } from '@angular/router';

import { IBootstrapState } from '../interfaces';
import { ShapeComponent } from '../../../../../shared/shapes/components';

export const INITIAL_STATE: IBootstrapState = {
    shapes: [],
};

export const ACTIONS = {};

export const ROUTES: Routes = [
    {
        path: 'shape',
        component: ShapeComponent,
    },
    {
        path: '',
        redirectTo: 'shape',
        pathMatch: 'full',
    },
];
