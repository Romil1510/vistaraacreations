import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import About from "./pages/About"
import Collections from "./pages/Collections"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import ProductPage from "./pages/ProductPage"
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/collections" element={<Collections/>}/>
        <Route path="/contact" element={<Contact/>}/>
         <Route path="/products/:productId" element={<ProductPage />} />
      </Routes>
  
      <Footer/>
      
    </div>
  )
}

export default App
