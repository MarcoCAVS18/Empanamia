import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ItemListContainerByCategory from "./components/ItemListContainer/itemListContainerByCategory";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer/>} />
          <Route
            path="/category/:categoryID"
            element={<ItemListContainerByCategory />}
          />
          <Route 
          path="/item/:itemID" 
          element={<ItemDetailContainer />} 
          />
          <Route 
          path="*" 
          element={<h1 className="p-6 text-center">404 NOT FOUND </h1>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
