import "./App.css";
import NavBar from "./componets/NavBar";
import Banner from "./componets/Banner/Banner";
import Title from "./componets/Title/Title";
import ItemCount from "./componets/ItemCount/ItemCount";
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Title />
      <ItemCount />
      <ItemListContainer />
    </>
  );
}

export default App;
