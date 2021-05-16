import { useSelector } from 'react-redux'
import { ICartItemCat } from '../store/modules/cart/types'
import { IState } from '../store/store'

export function Cart() {

  const cats = useSelector<IState, ICartItemCat[]>(state => state.cart.cats)

  return (
    <>
      <h1>Cart Cats</h1>
      <span>Quantidade de itens no carrinho: {cats.length} </span>

      <div>
        {cats.map(item => (
          <div style={{ display: 'flex', width: "600px", justifyContent: "space-between" }} key={item.cat.id}>
            <p>{item.cat.name}</p>
            <p>Quantidade: {item.quantity}</p>
            <p>R${(item.cat.price * item.quantity).toFixed(2)}</p>
          </div>

        ))}

      </div>
    </>
  )
}