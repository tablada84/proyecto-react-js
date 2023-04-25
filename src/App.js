import "./App.css";
import NavBar from "./componets/NavBar";
import Banner from "./componets/Banner/Banner";
import Title from "./componets/Title/Title";
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer";
import PlaceHolder from "./componets/Placeholder/PlaceHolder";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Title />
      <ItemListContainer />
      <PlaceHolder />
    </>
  );
}

export default App;
