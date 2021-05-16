import { createStore, applyMiddleware } from 'redux';
import rootReducer from './modules/rootReducer';
import {ICartState} from './modules/cart/types'

//SAGA

import createSagaMiddleware from 'redux-saga';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export interface IState{
  cart: ICartState;
}

const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export default store