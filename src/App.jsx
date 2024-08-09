import "./App.css";
import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";


function App() {
  return (
   
      
        <Routes>
          <Route path="/" element={<>main page</>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/products" element={<ProductsPage/>}>
           </Route>
          <Route path="/blog" element={<>blog</>} />
        </Routes>
      
    
  );
}

export default App;
