import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import MainLayout from "./components/MainLayout";
import Forgotpass from "./pages/Forgotpass";
import Resetpass from "./pages/Resetpass";
import Enquiries from "./pages/Enquiries";
import Bloglist from "./pages/Bloglist";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Productlist from "./pages/Productlist";
import Categorylist from "./pages/Categorylist";
import Addblog from "./pages/Addblog";
import Addcate from "./pages/Addcate";
import Addproduct from "./pages/Addproduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<Resetpass />} />
        <Route path="/forgot-password" element={<Forgotpass />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='enquiries' element={<Enquiries />} />
          <Route path='blog-list' element={<Bloglist />} />
          <Route path='orders' element={<Orders />} />
          <Route path='customers' element={<Customers />} />
          <Route path='list-product' element={<Productlist />} />
          <Route path='list-category' element={<Categorylist />} />
          <Route path='category' element={<Addcate />} />
          <Route path='product' element={<Addproduct />} />
          <Route path='blog' element={<Addblog />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
