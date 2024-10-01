
import React, { lazy, Suspense} from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Loader from "./components/common/Loader/Loader"



//================== Lazy pages Imports====================
const Home = lazy(()=>import ("./Pages/Home"))
const NotFound = lazy(()=>import("./Pages/NotFound"))




// ===========Lazy Loading wrapper=============
const LazyLoadingWrapper = ({ Component }) => {
  return (
    <Suspense fallback={<Loader />}>
        <Component />
    </Suspense>
  );
};

function App() {
  return (
    <div className="App">
   
      {/* ===================Routes===================== */}
          <BrowserRouter>
              <Routes>
                <Route path='/' element={<LazyLoadingWrapper Component={Home}/>}/>
                <Route path='*' element={<LazyLoadingWrapper Component={NotFound}/>}/>
              </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
