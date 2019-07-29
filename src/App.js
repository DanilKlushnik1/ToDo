import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "global/rootReducer";

import ToDo from "todo/containers/index";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <ToDo />
    </Provider>
  );
}

export default App;
