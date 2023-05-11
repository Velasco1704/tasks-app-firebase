import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Create } from "./pages/Create";
import { NavBar } from "./components/NavBar";
import "./styles/App.scss";

export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  );
};
