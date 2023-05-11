import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { TasksProvider } from "./context/index.tsx";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <TasksProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TasksProvider>
);
