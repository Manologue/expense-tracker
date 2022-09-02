import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";
import { Provider } from "./context/context";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <SpeechProvider appId="af3fc06f-1984-4809-98d3-4f826ca94699" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
