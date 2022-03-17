import React, { Component, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import Topbar from './Component/layout/Topbar'
import { BrowserRouter as Router,Routes, Route, useRoutes,Navigate } from 'react-router-dom'
import Footer from './Component/layout/Footer'
import ProtectedRoute from './Component/protectedRoutes/ProtectedRouter'
import MainPage from './Component/layout/index'
import Login from './Component/login/Login'

import './App.css'
function App(props) {
// const [openMenu,setOpenMenu]=useState(false)
// const [openSideBar,setOpenSideBar]=useState(false)
// const [togle,setTogle]=useState(false)


// // const { show } = props

//  const show = () => {
//    console.log('click');
  
//     setOpenMenu(!openMenu)
//   }
// const  handleClick = (index) => {
//   setOpenSideBar(index)
//   setTogle(!togle)
//     // this.setState({
//     //   openSideBar: index,
//     //   togle: !this.state.togle,
//     // })
//   }
  // let routes = useRoutes([
  //   { path: "/login", element: <Login /> },
  //   {  path:"/dashboard" ,element:
  //     <ProtectedRoute>
        {/* <Topbar  show={show} openMenu={openMenu} />
        <MainPage show={show} openMenu={openMenu} />
        <Footer /> */}
  //       <ProtectedChildren/>
  //     </ProtectedRoute> },
  //    { path:"*" ,element: <Navigate to="/login" />}
  //   // ...
  // ]);

  // return routes;
  return (
<MainPage/>
    // show={this.show} openMenu={this.state.openMenu}
    
      
      /* <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Topbar  />
                      <MainPage />
                      <Footer />
                    </ProtectedRoute>
                    
                  }
                ></Route>
                <Route path="*" element={ <Navigate  to="/login" />}>
                 
                 </Route>
      </Routes> */
  )
}

export default App
