// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import CartContextProvider from './contexts/CartContext';
import Appointment from './Pages/Appointment/Appointment';
import AdminProductsShow from './Pages/Dashboard/AdminDashboard/AdminProductsShow/AdminProductsShow';
import MakeAdmin from './Pages/Dashboard/AdminDashboard/MakeAdmin/MakeAdmin';
import BuyerUploadProduct from './Pages/Dashboard/BuyerDashboard/BuyerUploadProduct/BuyerUploadProduct';

import BuyerWelcome from './Pages/Dashboard/BuyerWelcome/BuyerWelcome';
import Dashboard from './Pages/Dashboard/Dashboard';
import About from './Pages/Homes/About/About';
import ProductDetails from './Pages/Homes/BuyerProducts/ProductsDetails/ProductsDetails';
import Contact from './Pages/Homes/Contact/Contact';
import Home from './Pages/Homes/Home/Home';
import ManyProducts from './Pages/Homes/ManyProducts/ManyProducts';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import OrderReview from './Pages/OrderReview/OrderReview';
import Food from './Pages/Products/Food/Food';
import Vegetables from './Pages/Products/Vegetables/Vegetables';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CartContextProvider>

        <BrowserRouter>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/register" element={<Register />} />
       <Route path="/login" element={<Login />} />
       <Route path="/product" element={<AdminProductsShow />} />
      
       <Route path="/OrderReview" element={<OrderReview />} />
       <Route path="/vegetables" element={<Vegetables />} />
       <Route path="/food" element={<Food />} />
       <Route path="/appointment" element={<Appointment />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/about" element={<About />} />
       <Route path="/manyProducts" element={<ManyProducts />} />
       <Route path="bookDetails/:id" element={<ProductDetails />}/>
       {/* <Route path="farmer" element={<ProductDetails />}/> */}


       <Route path="/dashboard" element={<Dashboard/>}>
       <Route path="/dashboard" element={<BuyerWelcome/>} />
       <Route path="/dashboard/welcome" element={<BuyerWelcome/>} />
       <Route path="/dashboard/makeadmin" element={<MakeAdmin/>} />
       <Route path="/dashboard/buyerUpload" element={<BuyerUploadProduct />} />

       </Route>
       </Routes>
       </BrowserRouter>

        </CartContextProvider>
     
      </AuthProvider>
     
    </div>
  );
}

export default App;
