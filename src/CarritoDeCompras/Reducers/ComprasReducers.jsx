import { TYPES } from "../Actions/ComprasActions";

export const comprasInitialState={
    productos:[
        {id:1,name:"Producto 1",precio:100},
        {id:2,name:"Producto 2",precio:200},
        {id:3,name:"Producto 3",precio:300},
        {id:4,name:"Producto 4",precio:400},
        {id:5,name:"Producto 5",precio:500},
        {id:6,name:"Producto 6",precio:600},

    ],
    carrito:[],
};
export function comprasReducer(state,action){
    switch (action.type) {
        case TYPES.ADD_TO_CART:{
            const newItem =state.productos.find((producto)=> producto.id ===action.payload);
            const itemInCart=state.carrito.find((item)=> item.id===newItem.id);

            return itemInCart ?{...state,carrito:state.carrito.map((item)=> item.id ===newItem.id ? {...item, quantity:item.quantity + 1}: item)}:{...state,carrito:[...state.carrito,{...newItem,quantity:1}]}

        }
        case TYPES.REMOVE_ONE_FROM_CART:{
            const itemToDelete = state.carrito.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {...state,carrito: state.carrito.map((item) =>item.id === action.payload ? { ...item, quantity: item.quantity - 1 }
                : item
            )
          }
        : { ...state,carrito: state.carrito.filter((item) => item.id !== action.payload)}
    }

        
        case TYPES.REMOVE_ALL_FROM_CART:{
            return {
                ...state,
                carrito: state.carrito.filter((item) => item.id !== action.payload),
              };

        }
        case TYPES.CLEAR_CART:
            return comprasInitialState;
            
            
    
        default:
            return state;
    }
}