import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ProductsList from "./pages/ProductsList/ProductsList";
import Register from "./pages/Register/Register";
//User Routes
import UserCartDetails from "./pages/User/UserCartDetails/UserCartDetails";
import UserOrderDetails from "./pages/User/UserOrderDetails/UserOrderDetails";
import UserOrders from "./pages/User/UserOrders/UserOrders";
import UserProfile from "./pages/User/UserProfile/UserProfile";
//Admin Routes
import AdminChat from "./pages/Admin/AdminChat/AdminChat";
import AdminCreateProduct from "./pages/Admin/AdminCreateProduct/AdminCreateProduct";
import AdminEditProducts from "./pages/Admin/AdminEditProducts/AdminEditProducts";
import AdminEditUser from "./pages/Admin/AdminEditUser/AdminEditUser";
import AdminOrderDetails from "./pages/Admin/AdminOrderDetails/AdminOrderDetails";
import AdminOrders from "./pages/Admin/AdminOrders/AdminOrders";
import AdminProducts from "./pages/Admin/AdminProducts/AdminProducts";
import AdminUser from "./pages/Admin/AdminUser/AdminUser";

import AdminAnalytics from "./pages/Admin/AdminAnalytics/AdminAnalytics";
//Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";
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
          <Route path="/product-details/:id" exact element={<ProductDetail />} />
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
      <div style={{marginTop:200}}></div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
