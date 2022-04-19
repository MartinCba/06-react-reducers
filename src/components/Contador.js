import React, { useReducer, useState } from "react";

const initialState = { contador: 0 };

const TYPES = {
  INCREMENT: "INCREMENT",
  INCREMENT_5: "INCREMENT_5",
  DECREMENT: "DECREMENT",
  DECREMENT_5: "DECREMENT_5",
};

function reducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { contador: state.contador + 1 };
    case TYPES.INCREMENT_5:
      return { contador: state.contador + action.payload };
    case TYPES.DECREMENT:
      return { contador: state.contador - 1 };
    case TYPES.DECREMENT_5:
      return { contador: state.contador - action.payload };
    case TYPES.RESET:
      return initialState;
    default:
      return state;
  }
}

const Contador = () => {
  //const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  //const sumar = () => setCount(count + 1);
  const sumar = () => dispatch({ type: TYPES.INCREMENT });

  const sumar_5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });

  //const restar = () => setCount(count - 1);
  const restar = () => dispatch({ type: TYPES.DECREMENT });

  const restar_5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });

  const reset = () => dispatch({ type: TYPES.RESET });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador Reducer</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <nav>
        <button onClick={sumar_5}>+5</button>
        <button onClick={restar_5}>-5</button>
      </nav>
      <nav>
        <button onClick={reset}>Reset</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
};

export default Contador;
