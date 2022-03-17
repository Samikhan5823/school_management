import React, { useEffect, useState } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate()
  const loginStore = useSelector((state) => state.LoginReducer)

  // useEffect(() => {
  //   if (loginStore.isLoggedin) {
  //     return Outlet
  //   } else if (!loginStore.isLoggedin) {
  //     navigate('/login')
  //   } else {
  //     return <h1>Loading...</h1>
  //   }
  // }, [loginStore])

  if (loginStore.isLoggedin) {
    return children
  } else if (!loginStore.isLoggedin) {
    navigate('/login')
  } else {
    return <h1>Loading...</h1>
  }
}
export default ProtectedRoute

// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';

// const ProtectedRoute = () => {
//     const auth = null; // determine if authorized, from context or however you're doing it

//     // If authorized, return an outlet that will render child elements
//     // If not, return element that will navigate to login page
//     return auth ? <Outlet /> : <Navigate to="/login" />;
// }
// export default ProtectedRoute
