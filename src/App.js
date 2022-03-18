import React, { Component, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import Topbar from '../src/Component/layout/topbar/Topbar'
import { BrowserRouter as Router, Routes, Route, useRoutes, Navigate } from 'react-router-dom'
import Footer from './Component/layout/footer/Footer'
import ProtectedRoute from './Component/protectedRoutes/ProtectedRouter'
import MainPage from './Component/layout/mainpage/index'
import Login from './Component/login/Login'

import './App.css'
function App(props) {

  return (
    <MainPage />

  )
}

export default App
