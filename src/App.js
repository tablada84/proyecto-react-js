import "./App.css";
import NavBar from "./componets/NavBar";
import Banner from "./componets/Banner/Banner";
import Title from "./componets/Title/Title";
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer";

import DataContext from "./componets/Context/DataContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataProvaider from "./componets/Context/DataContext";
import Products from "./componets/Products/Products";
function App() {
  return (
    <DataProvaider>
      <BrowserRouter>
        <NavBar />
        <Banner />
        <Products />
        <Title />
        <Routes>
          <Route path="/ cart" element={<DataContext />} />
          <Route path="/" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </DataProvaider>
  );
}

export default App;
