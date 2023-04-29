import "./App.css";
import NavBar from "./componets/NavBar";
import Banner from "./componets/Banner/Banner";
import Title from "./componets/Title/Title";
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ApiPlaceholder from "./componets/ApiPlaceholder/ApiPlaceholder";
import User from "./componets/User/User";
import { Productos } from "./componets/Productos/Productos";

function App() {
  return (
    <BrowserRouter>
      <User />

      <ApiPlaceholder />
      <NavBar />
      <Banner />
      <Title />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
