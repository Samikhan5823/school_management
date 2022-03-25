import React from 'react'
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom'
import Dashboard from '../../SiderbarMenu/DashBoard/Dashboard'
import Login from '../../login/Login'
import DashboardLayout from '../dashboardlayout/DashboardLayout'
import Book from '../../SiderbarMenu/Library/Book'
import BooksCategory from '../../SiderbarMenu/Library/BooksCategory'
import Attendanceindex from '../../SiderbarMenu/StudentPage/AttendancePage/Attendanceindex'
import EmpManagement from '../../SiderbarMenu/Financepage/EmpManagement'
function MainPage() {
  return (
    <>
      <Router>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={< Navigate to='/login' />} />

          <Route path="/"element={<DashboardLayout />} >

            <Route index element={<Dashboard />} />
            <Route >
              <Route path='/student/attendance' element={<Attendanceindex />} />
            </Route>
            <Route   >
              <Route path="/library/books" element={<Book />} />
              <Route path="/library/booksCategory" element={<BooksCategory />} />

            </Route>
            <Route   >
              <Route path="financeCategory/empmanagement" element={<EmpManagement />} />
            </Route>

          </Route>
        </Routes>
      </Router>
    </>
  )

}
export default MainPage
