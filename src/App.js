import React from "react";
import { Provider } from "react-redux";

import "./configs/ReactotronConfig";
import store from "./store";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  );
}

export default App;
