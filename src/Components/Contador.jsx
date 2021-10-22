import { useReducer} from "react";

const initialState ={ contador:0};

const init = (initialState) => {
    return {
      contador: initialState.contador + 100,
    };
  };

const TYPES ={
    INCREMENT: "INCREMENT",
    INCREMENT_5:"INCREMENT_5",
    DECREMENT:"DECREMENT",
    DECREMENT_5:"DECREMENT_5",
    RESET:"RESET"
}

function reducer(state,action){
    switch(action.type){
        case TYPES.INCREMENT:
        return{contador: state.contador +1 };
        case TYPES.INCREMENT_5:
        return{contador: state.contador + action.payload};
        case TYPES.DECREMENT:
        return{contador: state.contador -1 };
        case TYPES.DECREMENT_5:
        return{contador: state.contador - action.payload};
        case TYPES.RESET:
            return initialState;

        default:
            return state;
    
    }
}

function Contador() {



    /* const [ contador, setContador] = useState(0); */
    const [state, dispatch] = useReducer(reducer, initialState,init)
    

  /*   const suma=()=> setContador(contador +1); */
  const suma=()=> dispatch({type:TYPES.INCREMENT})
  const suma5=()=> dispatch({type:TYPES.INCREMENT_5,payload:5})
   /*  const resta=()=> setContador(contador-1); */
   const resta=()=> dispatch({type:TYPES.DECREMENT})
   const resta5=()=>dispatch({type:TYPES.DECREMENT_5,payload:5})
   const reset=()=> dispatch({type:TYPES.RESET});
    return (
        <div style={{textAlign:"center"}}>
            <h1>Contador Reducers</h1>
            <button onClick={suma5}>+5</button>
            <button onClick={suma}>+</button>
            <button onClick={reset}>0</button>
            <button  onClick={resta}>-</button>
            <button  onClick={resta5}>-5</button>
            <h1>{state.contador}</h1>
        </div>
    )
}

export default Contador
