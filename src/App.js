import './App.css';
import "react-toastify/dist/ReactToastify.css"; 
import Home from './components/Home'
import About from './components/About';
import Product from './components/Product';
import { Routes, Route,BrowserRouter  } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Header from '../src/components/Header.jsx'
import Footer from './components/Footer';
import Annoncement from './components/Annoncement';
import Contact from './components/Contact';
import Login from './components/buttons/Login';
import Signup from './components/buttons/Signup';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import UserProfil from './components/UserProfil';
import Payment from './components/Payment';
import OrderList from "./components/admin/OrderList"
import AdminRoute from './components/AdminRoute';
import Rapp from './components/adminUsers/Rapp';
import UpdateProduct from './components/admin/UpdateProduct';

//import PrivateRoute from './components/admin/PrivateRoute';
//import AdminNavbar from './components/admin/AdminNavbar';

import AddProducts from './components/admin/AddProducts';
import AllProducts from './components/admin/AllProducts';
import Dashboard from './components/admin/Dashboard';
import Layout from './components/admin/Layout';
import Profiluser from './components/admin/Profiluser';

// import Sidebar from './components/buttons/Sidebar';
// import Pagehome from './components/admin/Pagehome';
// import UserList from './components/admin/UserList';



function App() {
  return (
    <BrowserRouter>
     <>
    <Annoncement/>
     <Header/>
     <Routes>

     
     <Route path='/' element={<Home/>} />
     <Route path='/posts' element={<Rapp/>} />
     <Route path='products' element={<Product/>} />
     <Route path='/api/products/:id' element={<ProductDetail/>} />
     <Route path='/cart/' element={<Cart/>} />
     <Route path='/checkout' element={<Checkout/>} />
     <Route path='/contact' element={<Contact/>} />
     <Route path='/about' element={<About/>} />
     {/* <Route path='/admin' element={<AdminNavbar/>} /> */}
     <Route path='/ogin' element={<Login/>} />
     <Route path='/signup' element={<Signup/>} />
     <Route path='/profil' element={<UserProfil/>} />
     <Route path='/payment' element={<Payment/>} />

     
     <Route path='/dashboard/all-products' element={<AllProducts/>}/>
      <Route path='/dashboard/add-products' element={<AddProducts/>}/>
      <Route path='/update/:id' element={<UpdateProduct/>} />
      <Route path='/layout' element={<Layout/>}/>
      
      
   
    <Route path='/admin/dashboard' element={<Dashboard/>}/>
    {/* <Route path="/admin/orderlist"element={<OrderList /> }/>
    <Route path="/admin/userlist"element={<UserList />}/> */}

    <Route path="/profiluser"element={<Profiluser />}/>
      
      
     
  </Routes>
     <Footer/>

    </>
    </BrowserRouter>
  );
}

export default App;
