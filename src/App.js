
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from "./components/navbar/Navbar"
function App() {
   const [load, updateLoad] = useState(true);
   useEffect(()=>{
    const timer = setTimeout(()=>{
      updateLoad(false);
    },1200);
    return ()=> clearTimeout(timer);
   },[]);
  return (
    <Navbar/>
  );
}

export default App;
