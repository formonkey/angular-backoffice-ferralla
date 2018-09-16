import { createStore, Store } from 'redux';

import { INITIAL_STATE } from './bootstrap/constants';
import { IBootstrapState } from './bootstrap/interfaces';
import { shapeReducer } from '../../../shared/shapes/reducers';

const devTools = (<any>window).__REDUX_DEVTOOLS_EXTENSION__ && (<any>window).__REDUX_DEVTOOLS_EXTENSION__;

export const storeInstance: Store<IBootstrapState> = createStore(shapeReducer, INITIAL_STATE, devTools && devTools());
