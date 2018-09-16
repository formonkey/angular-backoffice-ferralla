import { createStore, Store } from 'redux';

import { INITIAL_STATE } from './bootstrap/constants';
import { bootstrapReducer } from './bootstrap/reducers';
import { IBootstrapState } from './bootstrap/interfaces';

const devTools = (<any>window).__REDUX_DEVTOOLS_EXTENSION__ && (<any>window).__REDUX_DEVTOOLS_EXTENSION__;

export const storeInstance: Store<IBootstrapState> = createStore(bootstrapReducer, INITIAL_STATE, devTools && devTools());
