
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Loader from './components/common/Loader/Loader';
import { UserProvider } from "./Context/UserContext";


//================== Lazy pages Imports====================
const Home = lazy(()=>import ("./Pages/Home"))
const CreateUser = lazy(()=>import("./Pages/CreateUser"))
const EditUser = lazy(()=>import("./Pages/EditUser"))
const NotFound = lazy(()=>import("./Pages/NotFound"))
const UserDetailsPage = lazy(()=>import("./Pages/UserDetailsPage"))



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
      {/* User Conntext to pass to child components */}
      <UserProvider>
      {/* ===================Routes===================== */}
          <BrowserRouter>
              <Routes>
                <Route path='/' element={<LazyLoadingWrapper Component={Home}/>}/>
                <Route path='/create-user' element={<LazyLoadingWrapper Component={CreateUser}/>}/>
                {/* <Route path='/edit-user' element={<LazyLoadingWrapper Component={EditUser} />} /> */}
                <Route path='/edit-user/:id' element={<LazyLoadingWrapper Component={EditUser} />} />
                {/* <Route path='/user-details' element={<LazyLoadingWrapper Component={UserDetailsPage}/>}/> */}
                <Route path="/user-details/:id" element={<LazyLoadingWrapper Component={UserDetailsPage}/>} />
                <Route path='*' element={<LazyLoadingWrapper Component={NotFound}/>}/>
              </Routes>
          </BrowserRouter>
        </UserProvider>
    </div>
  );
}

export default App;
