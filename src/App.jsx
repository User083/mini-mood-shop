import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Store, About, Cart, Checkout } from "./pages";
import { Navbar, Footer, Construction } from "./components";
import { CountProvider } from "./utils/CartCount";

function App() {
  return (
    <BrowserRouter>
      <CountProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/store/:collection"
            element={<Store />}

            // errorElement={<ErrorBoundary />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/checkout" element={<Construction />} />
        </Routes>
        <Footer />
      </CountProvider>
    </BrowserRouter>
  );
}

export default App;
