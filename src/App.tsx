import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import NewArrivals from "./components/home/NewArrivals";
import TopSelling from "./components/home/TopSelling";
import Coustomer from "./components/home/Coustomer";
import Browse from "./components/home/Browse";
import ProductDetail from "./components/productdetail/ProductDetail";
import Reviews from "./components/productdetail/Reviews";
import "./index.css";
import RelatedProducts from "./components/productdetail/RelatedProducts";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <NewArrivals />
              <TopSelling />
              <Coustomer />
              <Browse />
            </>
          }
        />

        {/* Product Detail Route */}
        <Route
          path="/product/:id"
          element={
            <>
              <ProductDetail />
              <Reviews />
              <RelatedProducts />
            </>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
