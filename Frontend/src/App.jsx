import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
  import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  return (
   <div className=' px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
       <ToastContainer
        position="bottom-left"   // 👈 This sets the toast to bottom-left
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
   <Navbar/>
   <SearchBar/>
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/cart' element={<Cart/>}/>
   <Route path='/collection' element={<Collection/>}/>
   <Route path='/contact' element={<Contact/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/orders' element={<Orders/>}/>
   <Route path='/place-order' element={<PlaceOrder/>}/>
   <Route path='/products/:productId' element={<Product />} />

   </Routes>
   <Footer/>
   

   </div>
  )

}
export default App
