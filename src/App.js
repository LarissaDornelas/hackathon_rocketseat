import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import "./configs/ReactotronConfig";
import store from "./store";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ToastContainer autoClose={4000} />
      <Routes />
    </Provider>
  );
}

export default App;
