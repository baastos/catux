export enum ActionTypes {
  addCatToCartSuccess = 'ADD_CAT_TO_CART_SUCCESS',
  addCatToCartFailure = 'ADD_CAT_TO_CART_FAILURE',
  addCatToCartRequest = 'ADD_CAT_TO_CART_REQUEST',
}

export interface ICat {
  id: number;
  name: string;
  price: number;
}

export interface ICartItemCat {
  cat: ICat,
  quantity: number;
}

export interface ICartState{
  cats: ICartItemCat[];
  failedStockCheckIds: number[];
}
