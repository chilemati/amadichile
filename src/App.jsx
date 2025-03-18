import React, { Suspense, lazy, useEffect, useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Fetching from "./components/fetching/Fetching";
import Portfolio from './components/portfolio/Portfolio'
import Footer from "./components/footer/Footer";

const App = () => {
const [ready,setReady] = useState(false);
useEffect(()=> {
  setReady(true)
},[])
  return (
    <div  className="App">
      <Nav />
       {
         ready && 
         <Routes  >
         <Route path="/" element={<Portfolio />} />
       </Routes>
       }
       {
        !ready && <Fetching />
       }
       <Footer />
    </div>
  );
};

export default App;
