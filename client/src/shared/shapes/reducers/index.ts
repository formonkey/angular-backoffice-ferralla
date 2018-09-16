import { IShapeState } from '../interfaces';
import { ACTIONS, COLORS } from '../constants';

export function shapeReducer(state: IShapeState, action): IShapeState {
    switch(action.type) {
        case ACTIONS.SET:
            return { ...state, ...{ shapes: action.payload } };
        case ACTIONS.KPI:
            return { ...state, ...{ kpis: action.payload } };
        case ACTIONS.ACCEPT:
            state.shapes[ action.payload ][ 'color' ] = COLORS.ACCEPT;

            return state;
        case ACTIONS.CANCEL:
            state.shapes[ action.payload ][ 'color' ] = COLORS.CANCEL;

            return state;
    }

    return state;
}
