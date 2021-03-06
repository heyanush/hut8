import React from "react";
import { Provider } from "react-redux";
import { AppContainer } from "./src/AppContainer";
import { store } from "./src/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;