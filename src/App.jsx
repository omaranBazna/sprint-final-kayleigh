import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Articles from "./pages/Articles"
import Aboutus from "./pages/Aboutus"
import { useState } from 'react';
export default function App() {
  const [article,setArticle]=useState(0)
  return (
    <div class="App">
    
  <header>
    <Header />
    <Navbar />
      </header>
      <main>
       <Routes>

     <Route path="/aboutus" element={<Aboutus />} />
         
   <Route path="/articles" element={<Articles article={article}/>} />
         
   <Route path="/"  element={<Home setArticle={setArticle}/>} >
     
   </Route>
         
      </Routes> 
      </main>
      <Footer />
    </div>
  )
}
