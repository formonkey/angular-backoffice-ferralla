import { InjectionToken } from '@angular/core';

export const BOOTSTRAP_ACTIONS = new InjectionToken<object>('BOOTSTRAP_ACTIONS');

export const ACTIONS = {
    SET: 'SET',
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
