import './App.css';
import React from 'react';

import Sidebar from "./components/sidebar";
import TopBar from "./components/topBar";
import HomeReact from "./components/homeReact";
import SeeProduct from "./components/seeProduct";
import Footer from "./components/footer";


function App() {
  return (
    <>
    <div id="wrapper">    
      <Sidebar />       
    </div>
    <Footer />
  </>
);
}

export default App;
