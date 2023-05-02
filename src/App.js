import "./App.css";
import NavBar from "./componets/NavBar";
import Banner from "./componets/Banner/Banner";
import Title from "./componets/Title/Title";
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/* import ApiPlaceholder from "./componets/ApiPlaceholder/ApiPlaceholder"; */
/* import User from "./componets/User/User"; */

import ItemDetailContainer from "./componets/ItemDetailContainer/ItemDetailContainer";
import CartWidget from "./componets/CartWidget/Index";

function App() {
  return (
    <BrowserRouter>
      {/* <User />  */}

      {/*  <ApiPlaceholder />  */}
      <NavBar />
      <Banner />
      <Title />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/Productos/:ProductosId" element={<ItemListContainer />} />
        <Route path="/Contactos" element={<ItemListContainer />} />
        <Route path="/cart" element={<CartWidget />} />
        <Route path="/" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
