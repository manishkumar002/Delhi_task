import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./components/pages/Header";
import Register from "./components/pages/Register";
import View from "./components/pages/View"; 
import './App.css';

 
function App() {
  return (
    <>
    <div className="">
    <BrowserRouter>
      <Header/>
   
      <Routes>
       <Route path="/" element={<Register/>}/>
        <Route path="/view" element={<View/>}/>         
      </Routes> 
       </BrowserRouter> 
    </div>
    
    </>
  )
}

export default App;
