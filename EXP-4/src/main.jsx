import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { Provider } from "react-redux";
import { store } from "./store/Store.jsx";

import CounterContextProvider from "./components/context/CounterGlobalContextAPI.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <CounterContextProvider>
        <App />
      </CounterContextProvider>
    </Provider>
  </StrictMode>
);
