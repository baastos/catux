import { ActionTypes, ICat } from "./types";

export function addCatToCartRequest(cat: ICat){
  return{
    type: ActionTypes.addCatToCartRequest,
    payload: {
      cat
    }
  }

}

export function addCatToCartSuccess(cat: ICat){
  return{
    type: ActionTypes.addCatToCartSuccess,
    payload: {
      cat
    }
  }

}

export function addCatToCartFailure(catId: number){
  return{
    type: ActionTypes.addCatToCartFailure,
    payload: {
      catId
    }
  }

}