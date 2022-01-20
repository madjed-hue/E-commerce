import React, { useEffect, useState } from "react";
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
import Payment from "./component/Cart/Payment";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/admin/Dashboard";
import ProductList from "./component/admin/ProductList";
import NewProduct from "./component/admin/NewProduct";
import UpdateProduct from "./component/admin/UpdateProduct";
import OrderList from "./component/admin/OrderList";
import ProcessOrder from "./component/admin/ProcessOrder";
import UsersList from "./component/admin/UsersList";
import UpdateUser from "./component/admin/UpdateUser";
import ProductReviews from "./component/admin/ProductReviews";
import About from "./component/layout/About/About";
import Contact from "./component/layout/Contact/Contact";
import NotFound from "./component/layout/Not Found/NotFound";

function App(id) {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApikey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
    getStripeApikey();
  }, []);

  // window.addEventListener("contextmenu", (e) => e.preventDefault());

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
          {stripeApiKey && (
            <Route
              path="/process/payment"
              exact
              element={
                <Elements stripe={loadStripe(stripeApiKey)}>
                  <Payment />
                </Elements>
              }
            />
          )}
          <Route exact path="/success" element={<OrderSuccess />} />
          <Route exact path="/orders" element={<MyOrders />} />
          <Route exact path="/order/:id" element={<OrderDetails />} />
          <Route
            isAdmin={true}
            exact
            path="/admin/dashboard"
            element={<Dashboard />}
          />
          <Route
            isAdmin={true}
            exact
            path="/admin/products"
            element={<ProductList />}
          />

          <Route
            isAdmin={true}
            exact
            path="/admin/product"
            element={<NewProduct />}
          />
          <Route
            isAdmin={true}
            path="/admin/product/:id"
            exact
            element={<UpdateProduct id={id} />}
          />
          <Route
            isAdmin={true}
            path="/admin/orders"
            exact
            element={<OrderList />}
          />
          <Route
            isAdmin={true}
            path="/admin/order/:id"
            exact
            element={<ProcessOrder />}
          />
          <Route
            isAdmin={true}
            path="/admin/users"
            exact
            element={<UsersList />}
          />
          <Route
            isAdmin={true}
            path="/admin/user/:id"
            exact
            element={<UpdateUser />}
          />
          <Route
            isAdmin={true}
            path="/admin/reviews"
            exact
            element={<ProductReviews />}
          />
        </Route>
        <Route path="/password/forgot" exact element={<ForgotPassword />} />
        <Route
          path="/password/reset/:token"
          exact
          element={<ResetPassword />}
        />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
