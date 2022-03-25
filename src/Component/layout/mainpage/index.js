import React from 'react'
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom'
import Dashboard from '../../SiderbarMenu/DashBoard/Dashboard'
import Login from '../../login/Login'
import DashboardLayout from '../dashboardlayout/DashboardLayout'
import Book from '../../SiderbarMenu/Library/Book'
import BooksCategory from '../../SiderbarMenu/Library/BooksCategory'
import Attendanceindex from '../../SiderbarMenu/StudentPage/AttendancePage/Attendanceindex'
import AddDesignation from '../../SiderbarMenu/Hr/payroll/addDesignation/AddDesignation'
import AddDepartment from '../../SiderbarMenu/Hr/payroll/addDepartmnt/AddDepartment'
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
              <Route path="hr/payroll/emp-management/addepartment" element={<AddDepartment />} />
              <Route path="hr/payroll/emp-management/addesignation" element={<AddDesignation />} />

            </Route>

          </Route>
        </Routes>
      </Router>
    </>
  )

}
export default MainPage
