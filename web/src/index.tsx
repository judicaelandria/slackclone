import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ClientProvider from "./provider/ClientProvider";

const container = document.getElementById("root");

const root = ReactDOMClient.createRoot(container!);
root.render(
  <ClientProvider>
    <App />
  </ClientProvider>
);

reportWebVitals();
