import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Store, About, Cart, Checkout } from "./pages";
import { Navbar, Footer, Construction } from "./components";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <BrowserRouter>
      <Navbar counter={counter} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/store/:collection"
          element={<Store setCounter={setCounter} />}

          // errorElement={<ErrorBoundary />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart setCounter={setCounter} />} />
        <Route path="/cart/checkout" element={<Construction />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
