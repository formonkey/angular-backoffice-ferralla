import { InjectionToken } from '@angular/core';

export const STEEL_TYPE = 986;
export const BOOTSTRAP_ACTIONS = new InjectionToken<object>('BOOTSTRAP_ACTIONS');

export const ACTIONS = {
    SET: 'SET',
    KPI: 'KPI',
};

export const HEADERS = [
    'valid',
    'prefix',
    'total',
    'type',
    'steelsort',
    'radius',
    'leadtime',
];
