import "./index.css";
import { createRoot } from "react-dom/client";
import { Provider } from "./context/books";
import App from "./App";

const el = document.getElementById("root");
const root = createRoot(el);

root.render(
  <Provider value={5}>
    <App />
  </Provider>
);
