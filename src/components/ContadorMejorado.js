import React, { useReducer } from "react";
import { TYPES } from "../actions/contadorActions";
import {
  contadorInitialState,
  contadorReducer,
} from "../reducers/contadorReducer";

const ContadorMejorado = () => {
  const [state, dispatch] = useReducer(contadorReducer, contadorInitialState);

  const sumar = () => dispatch({ type: TYPES.INCREMENT });

  const sumar_5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });

  const restar = () => dispatch({ type: TYPES.DECREMENT });

  const restar_5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });

  const reset = () => dispatch({ type: TYPES.RESET });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador Mejorado Reducer</h2>
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

export default ContadorMejorado;
