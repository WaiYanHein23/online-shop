import "./App.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { CategorySection } from "./components/CategorySection";
import { ProductSection } from "./components/ProductSection";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Layout from "./components/Layout";
import ProductDetails from "./pages/ProductDetails";
import MyCart from "./pages/MyCart";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      {/* <TodoList /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/product_details/:id"
              index
              element={<ProductDetails />}
            />
            <Route path="/my_cart" element={<MyCart />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={ErrorPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
