import { useReducer } from "react"
import { TYPES } from "./Actions/ComprasActions"
import Carrito from "./Carrito"
import Productos from "./Productos"
import { comprasInitialState, comprasReducer } from "./Reducers/ComprasReducers"

function CarritoDeCompras() {
    const [state, dispatch] = useReducer(comprasReducer, comprasInitialState);
    const {productos,carrito}=state

    const addToCart=(id)=>{
        dispatch({type:TYPES.ADD_TO_CART,payload:id})

    }
    const delFromCart=(id,all=false)=>{
        if (all) {
            dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
          } else {
            dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
          }

    }
     const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };
    
    return (
        <div>
        <h2>Carrito de Compras</h2>
        <h3>Productos</h3>
        <article className="box grid-responsive">
          {productos.map((product) => (
            <Productos key={productos.id} data={product} addToCart={addToCart} />
          ))}
        </article>
        <h3>Carrito</h3>
        <article className="box">
          <button onClick={clearCart}>Limpiar Carrito</button>
          {carrito.map((item, index) => (
            <Carrito key={index} data={item} delFromCart={delFromCart} />
          ))}
        </article>
      </div>
    )
}

export default CarritoDeCompras
