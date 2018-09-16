import { ACTIONS } from '../constants';
import { IShapeState } from '../interfaces';

export function shapeReducer(state: IShapeState, action): IShapeState {
    switch(action.type) {
        case ACTIONS.SET: return { ...state, ...{ shapes: action.payload }};
        case ACTIONS.KPI:
            return { ...state, ...{ kpis: action.payload } };
    }

    return state;
}
