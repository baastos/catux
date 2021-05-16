import { Reducer } from "redux"
import { ActionTypes, ICartState } from "./types"
import produce from 'immer';

const INITIAL_STATE: ICartState = {
  cats: [],
  failedStockCheckIds: []

}

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.addCatToCartSuccess: {
        const { cat } = action.payload;

        const catAlreadyInCart = draft.cats.findIndex(item => item.cat.id === cat.id);

        if (catAlreadyInCart>= 0) {

          draft.cats[catAlreadyInCart].quantity++
        } else {
          draft.cats.push({
            cat,
            quantity: 1,
          })
        }
        return draft
      }
      case ActionTypes.addCatToCartFailure: {
        const {catId} = action.payload;
        draft.failedStockCheckIds.push(catId)
        break;
      }
      default: {
        return draft
      }
    }
  })

}


export default cart