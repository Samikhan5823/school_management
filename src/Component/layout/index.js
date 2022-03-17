import React, { Component } from 'react'

import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import Dashboard from '../SiderbarMenu/DashBoard/Dashboard'
import Finance from '../SiderbarMenu/Financepage/Finance'
import Login from '../login/Login'
import DashboardLayout from './DashboardLayout'
import Book from '../SiderbarMenu/Library/Book'
import BooksCategory from '../SiderbarMenu/Library/BooksCategory'
import Attendance from '../SiderbarMenu/StudentPage/AttendancePage/Attendance'
import Attendanceindex from '../SiderbarMenu/StudentPage/AttendancePage/Attendanceindex'
function MainPage() {
  return (
    <>
      <Router>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={< Navigate to='/login'/>} />
      
          <Route
            path="/"
            element={<DashboardLayout />} >

            <Route index element={<Dashboard />} />
            <Route >
              <Route path='/student/attendance' element={<Attendanceindex />} />
            </Route>
            <Route   >
              <Route path="/library/books" element={<Book />} />
              <Route path="/library/booksCategory" element={<BooksCategory />} />

            </Route>
            <Route   >
              <Route path="financeCategory/finance" element={<Finance />} />
            </Route>

          </Route>
        </Routes>
      </Router>
    </>
  )

}
export default MainPage
