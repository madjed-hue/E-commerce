import React from "react";
import "./App.css";
import Header from "./component/layout/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import webFont from "webfontloader";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/user/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/user/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/user/UpdateProfile";
import UpdatedPassword from "./component/user/UpdatedPassword";
import ForgotPassword from "./component/user/ForgotPassword";
import ResetPassword from "./component/user/ResetPassword";
import Shipping from "./component/Cart/Shipping";
import Cart from "./component/Cart/Cart";
import ConfirmOrder from "./component/Cart/ConfirmOrder";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  React.useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
  }, []);
  return (
    <BrowserRouter>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/product/:id" exact element={<ProductDetails />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/search" exact element={<Search />} />
        <Route path="/login" exact element={<LoginSignUp />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route element={<ProtectedRoute />}>
          <Route exact path="/account" element={<Profile />} />
          <Route path="/me/update" exact element={<UpdateProfile />} />
          <Route path="/password/update" exact element={<UpdatedPassword />} />
          <Route path="/login/shipping" exact element={<Shipping />} />
          <Route path="/order/confirm" exact element={<ConfirmOrder />} />
        </Route>
        <Route path="/password/forgot" exact element={<ForgotPassword />} />
        <Route
          path="/password/reset/:token"
          exact
          element={<ResetPassword />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
