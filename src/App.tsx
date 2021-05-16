import { Cart } from "./pages/Cart";
import { Dashboard } from "./pages/Dashboard";
import { Provider } from 'react-redux'
import store from "./store/store";

export function App() {
  return (
    <Provider store={store}>

      <Dashboard />

      <Cart />

    </Provider >
  )
}

