import React, { createContext, useReducer } from "react";

import { useActions } from "./actions";
import { reducer, initialState } from "./reducer";

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children, ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    ...props.initialState,
  });
  const actions = useActions(state, dispatch);

  return <Provider value={{ state, actions }}>{children}</Provider>;
};

export { store, StateProvider };
