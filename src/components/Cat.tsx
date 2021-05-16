import { useDispatch, useSelector } from "react-redux";
import { addCatToCartRequest } from "../store/modules/cart/actions";
import { ICat } from "../store/modules/cart/types";
import { IState } from "../store/store";

interface CatProps {
  cat: ICat
}
export function Cat({ cat }: CatProps) {
  const dispatch = useDispatch();
  const isStockEmpty = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheckIds.includes(cat.id);
  })

  function handleAddCatToCart() {
    dispatch(addCatToCartRequest(cat))
  }

  return (
    <div>
      <strong>
        {cat.name} -
        <span> R${cat.price},00 </span>
      </strong>
      <button onClick={handleAddCatToCart}>Comprar</button>
      {isStockEmpty && <strong style={{ color: "red" }}>Falta no estoque</strong>}

    </div>
  )
}