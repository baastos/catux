import { AxiosResponse } from 'axios';
import {all, takeLatest, select, call, put} from 'redux-saga/effects'
import { api } from '../../../services/api';
import { IState } from '../../store';
import { addCatToCartFailure, addCatToCartRequest, addCatToCartSuccess} from './actions';
import { ActionTypes } from './types';

type CheckCatStockRequest = ReturnType<typeof addCatToCartRequest>

type StockResponse = {
  id:number;
  quantity: number;
}

function* checkCatStock({payload}: CheckCatStockRequest){
  const { cat } = payload;

  const currentQuantity: number = yield select((state: IState)=>{
    return state.cart.cats.find(item=> item.cat.id === cat.id)?.quantity ?? 0
  })
  
  const stockQuantityResponse: AxiosResponse<StockResponse> = yield call(api.get, `stock/${cat.id}`);
  
  const stockQuantity =  stockQuantityResponse.data.quantity;

  if(currentQuantity < stockQuantity){
    yield put(addCatToCartSuccess(cat))
  } else{
    yield put(addCatToCartFailure(cat.id))
  }
}

export default all([
  takeLatest(ActionTypes.addCatToCartRequest, checkCatStock)
])