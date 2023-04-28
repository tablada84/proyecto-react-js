import "./App.css";
import NavBar from "./componets/NavBar";
import Banner from "./componets/Banner/Banner";
import Title from "./componets/Title/Title";
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/* import ApiPlaceholder from "./componets/ApiPlaceholder/ApiPlaceholder"; */
/* import User from "./componets/User/User"; */
import Products from "./componets/Products/Products";
function App() {
  return (
    <BrowserRouter>
      {/*  <User /> */}
      <Products />
      {/* <ApiPlaceholder /> */}
      <NavBar />
      <Banner />
      <Title />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/pruducts" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
