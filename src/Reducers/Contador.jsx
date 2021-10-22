import { useReducer, useState } from "react";

const initialState ={ contador:0};

function reducer(state,action){
    switch(action.type){
        case"INCREMENT":
        return{contador: state.contador +1 };
        case"DECREMENT":
        return{contador: state.contador -1 };

        default:
            return state;
    
    }
}

function Contador() {



    /* const [ contador, setContador] = useState(0); */
    const [state, dispatch] = useReducer(reducer, initialState)
    

  /*   const suma=()=> setContador(contador +1); */
  const suma=()=> dispatch({type:"INCREMENT"})
   /*  const resta=()=> setContador(contador-1); */
   const resta=()=> dispatch({type:"DECREMENT"})
    return (
        <div style={{textAlign:"center"}}>
            <h1>Contador Reducers</h1>
            <button onClick={suma}>+</button>
            <button  onClick={resta}>-</button>
            <h1>{state.contador}</h1>
        </div>
    )
}

export default Contador
