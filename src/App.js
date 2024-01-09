import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Cart from "./pages/Cart/Cart";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ProductsList from "./pages/ProductsList/ProductsList";
//User Routes
import UserProfile from "./pages/User/UserProfile/UserProfile";
import UserCartDetails from "./pages/User/UserCartDetails/UserCartDetails";
import UserOrderDetails from "./pages/User/UserOrderDetails/UserOrderDetails";
import UserOrders from "./pages/User/UserOrders/UserOrders";
//Admin Routes
import AdminUser from "./pages/Admin/AdminUser/AdminUser";
import AdminEditUser from "./pages/Admin/AdminEditUser/AdminEditUser";
import AdminProducts from "./pages/Admin/AdminProducts/AdminProducts";
import AdminCreateProduct from "./pages/Admin/AdminCreateProduct/AdminCreateProduct";
import AdminEditProducts from "./pages/Admin/AdminEditProducts/AdminEditProducts";
import AdminOrders from "./pages/Admin/AdminOrders/AdminOrders";
import AdminOrderDetails from "./pages/Admin/AdminOrderDetails/AdminOrderDetails";
import AdminChat from "./pages/Admin/AdminChat/AdminChat";

import AdminAnalytics from "./pages/Admin/AdminAnalytics/AdminAnalytics";
//Components
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";
//User Components
import RoutesWithChatComponent from "./components/User/RoutesWithChatComponent";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//Utils
import ScrollTop from "./utils/ScrollTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Header />
      <Routes>
        <Route element={<RoutesWithChatComponent />}>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/product-details" exact element={<ProductDetail />} />
          <Route path="/product-list" exact element={<ProductsList />} />
          <Route path="*" exact element={<Home />} />
        </Route>

        {/* User Routes */}
        <Route element={<ProtectedRoutesComponent admin={false} />}>
          <Route path="/user" exact element={<UserProfile />} />
          <Route path="/user/my-orders" exact element={<UserOrders />} />
          <Route path="/user/cart-details" exact element={<UserCartDetails />} />
          <Route path="/user/order-details/:id" exact element={<UserOrderDetails />} />
        </Route>

        {/* Admin Routes */}

        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin/users" exact element={<AdminUser />} />
          <Route path="/admin/edit-user" exact element={<AdminEditUser />} />
          <Route path="/admin/products" exact element={<AdminProducts />} />
          <Route path="/admin/create-new-product" exact element={<AdminCreateProduct />} />
          <Route path="/admin/edit-product" exact element={<AdminEditProducts />} />
          <Route path="/admin/orders" exact element={<AdminOrders />} />
          <Route path="/admin/order-details/:id" exact element={<AdminOrderDetails />} />
          <Route path="/admin/chats" exact element={<AdminChat />} />
          <Route path="/admin/analytics" exact element={<AdminAnalytics />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
