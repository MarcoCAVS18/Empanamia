import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ItemDetail from "./components/ItemDetail/ItemDetail"
import ItemListContainerByCategory from "./components/ItemListContainer/itemListContainerByCategory";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route
            path="/category/:categoryID"
            element={<ItemListContainerByCategory />}
          />
          <Route path="/item/:itemID" element={<ItemDetail />} />
          <Route path="*" element={<h1 className="p-6 text-center">404 NOT FOUND </h1> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
